$(document).ready(function()
{
    if ($('pre code.language-javascript').length > 0)
    {
        var container = $('code.language-javascript')
            .parent()
            .hide();
        $('<table id="grid"></table><div id="jqGridPager"></div>')
            .insertBefore(container);
        eval($('pre code.language-javascript').text());
        $('<label class="btn btn-primary" id="show-code">Show Code</label>')
            .insertBefore(container)
            .on('click', function()
            {
                var button = $(this);
                if (container.is(':visible'))
                {
                    container.slideUp(300, function()
                    {
                        button.removeClass('active');
                    });
                }
                else
                {
                    container.slideDown(300, function()
                    {
                        button.addClass('active');
                    });
                }
            });
    }
});
