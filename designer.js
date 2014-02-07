(function(wEmailList) {
    var templates = WAF.require('wEmailList/templates'),
        options = [];
    
    wEmailList._templates = templates;
    
    // small hack to override wListView template list, need to find a better way to do it
    wEmailList._configuration.attributes['data-template'].options = options;
    
    wEmailList._templates.list.forEach(function(template, i) {
        options.push({
            key: i.toString(),
            value: template.description
        });
    });
});