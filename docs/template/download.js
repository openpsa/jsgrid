$(document).ready(function()
{
    function build_jsfile(files)
    {
        var urlprefix = 'https://raw.githubusercontent.com/openpsa/grid.js/master/',
            postdata = 'compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code';

        $.each(files, function(index, url)
        {
            postdata += '&code_url=' + url;
        });

        $.ajax({
            url: 'http://closure-compiler.appspot.com/compile',
            type: 'POST',
            data: postdata,
            crossDomain: true
        })
        .fail(function(e)
        {
            $('<div class="alert alert-danger" role="alert">' + e.responseText + '</div>')
                .insertAfter($('#download-button'));
        })
        .done(function(e)
        {
            var zip = new JSZip();
            zip.file("grid-custom.min.js", e);
            var content = zip.generate({type: "blob"});
            saveAs(content, "grid-custom.zip");
        })
        .always(function(e)
        {
            $('#download-button').prop('disabled', false);
        });
    }

    $('#download-button').on('click', function()
    {
        var urlprefix = 'https://raw.githubusercontent.com/openpsa/grid.js/master/',
            files = [];

        $('#download-button').prop('disabled', true);
        $('input[type="checkbox"]:checked').each(function(index, element)
        {
            files.push(urlprefix + $(this).val());
        });
        build_jsfile(files);
    })
});
