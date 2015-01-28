$(document).ready(function()
{
    var header_height = 60;

    if (   $('.demo-container').length > 0
        && $('pre code.language-javascript').length > 0)
    {
        var container = $('code.language-javascript').parent();

        $('<table id="grid"></table><div id="pager"></div>')
            .insertBefore(container);
        $('<div class="btn-group"></div>')
            .insertBefore(container)
            .append(
                $('<label class="btn btn-primary" id="show-code">Show Code</label>')
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
                    })
            );
        eval($('pre code.language-javascript').text());
    }

    if ($('h2, h3, h4').length > 5)
    {
        var nav = $('<ul class="nav">'),
            active_node = nav,
            level = 2,
            previous_level,
            new_level,
            i;

        function build_nav(node, leaf)
        {
            $('<li><a href="#' + leaf.attr('id') + '">' + leaf.text() + '</a></li>')
                .appendTo(node);
        }


        $('h2, h3, h4').each(function(index)
        {
            new_level = parseInt(this.nodeName.substr(1));
            if (previous_level === undefined)
            {
                previous_level = new_level;
            }
            else
            {
                previous_level = level;
            }
            level = new_level;
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

            if ($(this).attr('id') === undefined)
            {
                $(this).attr('id', 'heading-' + index);
            }

            build_nav(active_node, $(this));
        });

        nav.prependTo($('#sub-navigation'));

        $('body').scrollspy({target: '#sub-navigation', offset: 80});

        $('#sub-navigation li a').click(function(event) {
            event.preventDefault();
            $($(this).attr('href'))[0].scrollIntoView();
            scrollBy(0, -header_height);
        });

        $.expr[':'].noheadlines = function(a)
        {
            return jQuery(a).parents('h1, h2, h3, h4, h5, h6').length < 1;
        };

        $('code')
            .filter(':noheadlines')
            .each(function(index, element)
            {
                var hash = '#-' + $(element).text().toLowerCase() + '-';
                if (   hash.match(/^#-[a-z]+-$/)
                    && $('#sub-navigation li a[href="' + hash + '"]').length > 0)
                {
                    $(element).addClass('internal-link');
                }
            });
        $('main').on('click', '.internal-link', function(e)
        {
            e.preventDefault();
            var hash = '#-' + $(this).text().toLowerCase() + '-';
            if ($('#sub-navigation li a[href="' + hash + '"]').length > 0)
            {
                $('#sub-navigation li a[href="' + hash + '"]').click();
            }
        })
        if (   window.location.hash
            && Math.abs(Math.round($(window).scrollTop() - $(window.location.hash).offset().top)) < 1)
        {
            scrollBy(0, -header_height);
        }
    }

    $('#sub-navigation').affix({
        offset: {
            top: 150
        }
    });
});
