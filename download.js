$(document).ready(function()
{
    var urlprefix = 'https://raw.githubusercontent.com/openpsa/grid.js/master/',
        proxy_prefix = 'https://rawgit.com/openpsa/grid.js/master/',
        button = $('#download-button'),
        defaultlocale = $('#default-locale');


    function report_error(error)
    {
        var message = error.responseText || error.statusText;
        $('<div class="alert alert-danger" role="alert"><strong>Error:</strong> ' + message + '</div>')
            .insertAfter($('#download-button'));
    }

    function build_base()
    {
        button.button('compiling');

        var promise = load_file(proxy_prefix + 'js/grid.base.js')
            .then(function(e)
            {
                return e;
            });

        if ($('#default-locale').val() !== '')
        {
            return promise.then(insert_locale);
        }
        return promise;
    }

    function insert_locale(js)
    {
        return load_file(proxy_prefix + $('#default-locale').val())
            .then(function(e)
            {
                return js.replace(/\/\/::grunt-insert-locale/, e);
            });
    }

    function build_jsfile(js)
    {
        var requests = [];

        $('.module input[type="checkbox"]:checked').each(function(index, element)
        {
            requests.push(load_file(proxy_prefix + $(this).val()));
        });

        return $.when.apply($, requests)
            .then(function()
            {
                /* jquery passes different parameters to callback when it's only called with one deferred */
                if (requests.length === 1)
                {
                    js += arguments[0];
                }
                else
                {
                    for (i = 0; i < arguments.length; i++)
                    {
                        js += arguments[i][0];
                    }
                }
                return js;
            });
    }

    function compile(js)
    {
        return $.ajax({
            url: 'http://closure-compiler.appspot.com/compile',
            type: 'POST',
            dataType: 'text',
            data: 'compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code&js_code=' + encodeURIComponent(js),
            crossDomain: true
        })
        .fail(function(e)
        {
            report_error(e);
        })
        .then(function(e)
        {
            var zip = new JSZip();
            zip.file("grid-custom.min.js", e);
            return zip;
        });
    }

    function load_file(url)
    {
        return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'text',
            crossDomain: true
        })
        .fail(function(e)
        {
            report_error(e);
        })
    }

    function build_css(zip)
    {
        button.button('css');

        return load_file(proxy_prefix + 'dist/grid.js-0.1.0.min.css')
            .then(function(e)
            {
                zip.file("grid.js-0.1.0.min.css", e);
                return zip;
            });
    }

    function build_i18n(zip)
    {
        var requests = [],
            paths = [];

        button.button('locale');

        $('.locale input[type="checkbox"]:checked').each(function(index, element)
        {
            paths.push($(this).val().replace(/\.js$/, '.min.js'));
            requests.push(load_file(proxy_prefix + 'dist/' + paths[index]));
        });

        return $.when.apply($, requests)
            .then(function()
            {
                var i18n = (paths.length > 0) ? zip.folder("i18n") : null,
                    i;

                /* jquery passes different parameters to callback when it's only called with one deferred */
                if (paths.length === 1)
                {
                    i18n.file(paths[0].replace(/.+\//, ''), arguments[0]);
                }
                else
                {
                    for (i = 0; i < arguments.length; i++)
                    {
                        i18n.file(paths[i].replace(/.+\//, ''), arguments[i][0]);
                    }
                }
                return zip;
            });
    }

    function build()
    {
        return build_base()
            .then(build_jsfile)
            .then(compile)
            .then(build_css)
            .then(build_i18n);
    }

    button.on('click', function()
    {
        button.prop('disabled', true);

        build()
            .done(function(zip)
             {
                 var content = zip.generate({type: "blob"});
                 saveAs(content, "grid-custom.zip");
                 button.button('reset');
             })
            .always(function(e)
            {
                $('#download-button').prop('disabled', false);
            });
    });

    $('.locale input[type="checkbox"]').each(function()
    {
        defaultlocale.append('<option value="' + $(this).attr('value') + '">' + $(this).parent().text() + '</option>');
    });

    $('h3')
        .addClass('checkbox')
        .prepend(
            $('<input type="checkbox">')
                .on('change', function()
                    {
                        $(this).closest('fieldset').find('div.checkbox input[type="checkbox"]:not([disabled])').prop('checked', $(this).is(':checked'));
                    }))
        .wrapInner('<label>');
});
