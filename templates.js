WAF.define('wEmailList/templates', function() {
    return {
        list: [
            {
                description: 'Email List 1',
                template: '<li>name = {{name}} <br /><strong>(ID = _({{ID}})</strong></li>',
            },
            {
                description: 'EMail List 2',
                template: '<li{{#if isRead}} class="read"{{/if}}><date>{{date}}</date>{{#if attachment}}<span class="attachment"></span>{{/if}}<img src="{{avatar}}" /> <h3>{{email}}</h3><p><button class="star"></button>{{text}}</p><span class="tag">{{tag}}</span></li>'
            },
            {
                description: 'EMail List 3',
                template: '<li>{{title}}</li>'
            }
        ],
        defaultData: {
            items: [
                { name: "Leon", ID: "190", logo: "", title: 'title 1', tag: 'music' },
                { name: "Marc", ID: "10", logo: "", title: 'title 2', tag: 'job' }
            ]
        }
    };
});