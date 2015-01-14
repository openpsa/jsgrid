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
            var blob = new Blob([e], {type: "text/javascript;charset=utf-8"});
            saveAs(blob, "grid-custom.js");
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
