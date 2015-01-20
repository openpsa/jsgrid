$(document).ready(function()
{
    var urlprefix = 'https://raw.githubusercontent.com/openpsa/grid.js/master/',
        proxy_prefix = 'https://rawgit.com/openpsa/grid.js/master/dist/',
        button = $('#download-button');

    function report_error(error)
    {
        var message = error.responseText || error.statusText;
        $('<div class="alert alert-danger" role="alert"><strong>Error:</strong> ' + message + '</div>')
            .insertAfter($('#download-button'));
    }

    function build_jsfile(files)
    {
        var postdata = 'compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code';
        button.button('compiling');
        $.each(files, function(index, url)
        {
            postdata += '&code_url=' + url;
        });

        return $.ajax({
            url: 'http://closure-compiler.appspot.com/compile',
            type: 'POST',
            dataType: 'text',
            data: postdata,
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

        return load_file(proxy_prefix + 'grid.js-0.1.0.min.css', 'CSS download')
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
            requests.push(load_file(proxy_prefix + paths[index]));
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

    function build(files)
    {
        return build_jsfile(files)
            .then(build_css)
            .then(build_i18n);
    }

    button.on('click', function()
    {
        var files = [];

        button.prop('disabled', true);
        $('.module input[type="checkbox"]:checked').each(function(index, element)
        {
            files.push(urlprefix + $(this).val());
        });
        build(files)
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

    $('h3')
        .addClass('checkbox')
        .prepend(
            $('<input type="checkbox">')
                .on('change', function()
                    {
                        $(this).closest('fieldset').find('div.checkbox input[type="checkbox"]').prop('checked', $(this).is(':checked'));
                    }))
        .wrapInner('<label>');
});
