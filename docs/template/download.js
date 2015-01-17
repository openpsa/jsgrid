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
        .pipe(function(e)
        {
            var zip = new JSZip();
            zip.file("grid-custom.min.js", e);
            return zip;
        });
    }

    function build_css(zip)
    {
        return $.ajax({
            url: proxy_prefix + 'grid.js-0.1.0.min.css',
            type: 'GET',
            dataType: 'text',
            crossDomain: true
        })
        .fail(function(e)
        {
            report_error('CSS download', e);
        })
        .pipe(function(e)
        {
            zip.file("grid.js-0.1.0.min.css", e);
            return zip;
        });
    }

    function build(files)
    {
        return build_jsfile(files)
            .pipe(build_css);
    }

    $('#download-button').on('click', function()
    {
        var files = [];

        $('#download-button').prop('disabled', true);
        $('input[type="checkbox"]:checked').each(function(index, element)
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
