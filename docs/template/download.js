$(document).ready(function()
{
    var urlprefix = 'https://raw.githubusercontent.com/openpsa/grid.js/master/',
        proxy_prefix = 'https://rawgit.com/openpsa/grid.js/master/dist/';

    function report_error(source, error)
    {
        $('<div class="alert alert-danger" role="alert"><strong>Error during ' + source + '</strong>' + error.responseText + '</div>')
            .insertAfter($('#download-button'));
    }

    function build_jsfile(files)
    {
        var postdata = 'compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code';

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
            report_error('JS compilation', e);
        })
        .then(function(e)
        {
            var zip = new JSZip();
            zip.file("grid-custom.min.js", e);
            return zip;
        });
    }

    function load_file(url, operation)
    {
        return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'text',
            crossDomain: true
        })
        .fail(function(e)
        {
            report_error(operation, e);
        })
    }

    function build_css(zip)
    {
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

        $('.locale input[type="checkbox"]:checked').each(function(index, element)
        {
            paths.push($(this).val().replace(/\.js$/, '.min.js'));
            requests.push(load_file(proxy_prefix + paths[index], 'Locales download'));
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

    $('#download-button').on('click', function()
    {
        var files = [];

        $('#download-button').prop('disabled', true);
        $('.module input[type="checkbox"]:checked').each(function(index, element)
        {
            files.push(urlprefix + $(this).val());
        });
        build(files)
            .done(function(zip)
             {
                 var content = zip.generate({type: "blob"});
                 saveAs(content, "grid-custom.zip");
             })
            .always(function(e)
            {
                $('#download-button').prop('disabled', false);
            });

    })
});
