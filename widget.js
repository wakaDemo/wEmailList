WAF.define(
'wEmailList',
[
    'waf-core/widget',
    'wListView',
    'wEmailList/templates',
    'wEmailList/utils'
],
function(Widget, wListView, templates, Utils) {
    var wEmailList = Widget.create('wEmailList', wListView);

    WAF.extend(wEmailList.prototype, {
        init: function() {
            // call parent's constructor
            this.$super('init')();
            
            this.setTemplates(templates);
            
            this.bindEvents();
            
            this.setHook('date', Utils.formatDate);
        },
        
        bindEvents: function() {
            jQuery(this.node).on('click', 'button.star', function(event) {
                var row = $(event.currentTarget);
                
                row.toggleClass('stared');
                
                return false;
            });
        }
    });
    
    return wEmailList;
});