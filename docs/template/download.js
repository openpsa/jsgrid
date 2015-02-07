$(document).ready(function()
{
    var urlprefix = 'https://raw.githubusercontent.com/openpsa/jsgrid/master/',
        proxy_prefix = 'https://rawgit.com/openpsa/jsgrid/master/',
        button = $('#download-button'),
        defaultlocale = $('#default-locale'),
        selected_modules = [],
        preamble;


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

        if (defaultlocale.val() !== '')
        {
            return promise.then(insert_locale);
        }
        return promise;
    }

    function insert_locale(js)
    {
        return load_file(proxy_prefix + defaultlocale.val())
            .then(function(e)
            {
                return js.replace(/\/\/::grunt-insert-locale/, e);
            });
    }

    function build_jsfile(js)
    {
        var requests = [];

        $.each(selected_modules, function(index, element)
        {
            requests.push(load_file(proxy_prefix + element));
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
        .then(function(content)
        {
            var zip = new JSZip();

            zip.file("jsgrid-0.1.0-custom.min.js", preamble + "\n" + content);
            zip.file("jsgrid-0.1.0-custom.js", preamble + "\n" + js);
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

        return load_file(proxy_prefix + 'dist/jsgrid-0.1.0.min.css')
            .then(function(e)
            {
                zip.file("jsgrid-0.1.0.min.css", e);
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
        var now = new Date();

        selected_modules = [];
        $('.module input[type="checkbox"]:checked').each(function()
        {
            selected_modules.push($(this).val());
        });

        preamble = '// jsgrid custom build from ' + now.toISOString() + "\n";

        if (selected_modules.length > 0)
        {
            preamble += '// Selected modules: ' + selected_modules.join(', ') + "\n";
        }
        if (defaultlocale.val() !== '')
        {
            preamble += '// Default locale: ' + defaultlocale.val() + "\n";
        }

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
        .prepend($('<span class="glyphicon glyphicon-unchecked">'))
        .wrapInner($('<span class="group-toggle"></span>'));

    $('h3 .group-toggle')
        .on('click', function()
        {
            var toggle = $(this).find('.glyphicon'),
                is_checked = toggle.hasClass('glyphicon-check');
            toggle.toggleClass('glyphicon-unchecked glyphicon-check');
            $(this).closest('fieldset').find('div.checkbox input[type="checkbox"]:not([disabled])').prop('checked', !is_checked);
        })
        .tooltip(
        {
            placement: 'auto left',
            title: function()
            {
                var groupname = $(this).text();
                return 'click to select/deselect all items in ' + groupname;
            }
        });
});
