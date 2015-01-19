module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('rewrite_links', function (options)  {
        return options.fn(this).replace(/\.md"/g, '.html"');
    });
};
