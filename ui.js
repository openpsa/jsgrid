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

    if ($('h2, h3, h4').length > 5)
    {
        var nav = $('<ul class="nav">'),
            active_node = nav,
            level = 2,
            previous_level = 2,
            i;

        function build_nav(node, leaf)
        {
            $('<li><a href="#' + leaf.attr('id') + '">' + leaf.text() + '</a></li>')
                .appendTo(node);
        }


        $('h2, h3, h4').each(function()
        {
            previous_level = level;
            level = parseInt(this.nodeName.substr(1));
            if (previous_level > level)
            {
                for (i = previous_level; i > level; i--)
                {
                    active_node = active_node.parent().parent();
                }
            }
            if (previous_level < level)
            {
                active_node = active_node.children('li:last-child');
                for (i = previous_level; i < level; i++)
                {
                    active_node = $('<ul class="nav">').appendTo(active_node);
                }
            }

            build_nav(active_node, $(this));
        });

        nav.appendTo($('#sub-navigation'));
        $('body').scrollspy({target: '#sub-navigation', offset: 80});

        var offset = 60;

         $('#sub-navigation li a').click(function(event) {
             event.preventDefault();
             $($(this).attr('href'))[0].scrollIntoView();
             scrollBy(0, -offset);
         });
    }
});
