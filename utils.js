WAF.define('wEmailList/utils', function() {
    var months = [
        'Janv.',
        'Févr.',
        'Mars',
        'Avri.',
        'Mai',
        'Juin',
        'Juil.',
        'Août',
        'Sept.',
        'Octo.',
        'Nove.',
        'Déce.'
    ];    

    return {
        formatDate: function(dateStr) {
            var date = new Date(),
                today = new Date(),
                diff = 0,
                month,
                day,
                hours,
                minutes;
            
            date.setTime(Date.parse(dateStr));
            diff = today - date;
            
            // same day
            if (today.getDay() === date.getDay() && today.getMonth() === date.getMonth() && today.getYear() === date.getYear()) {
                hours = date.getHours();
                minutes = date.getMinutes();
                return (hours < 10 ? "0" + hours : hours) + ':' + (minutes < 10 ? "0" + minutes : minutes);
            } else if (diff < 172800000 && today.getDay() !== date.getDay()) {
                // < 2j
                return 'hier';
            } else if (diff < 864000000) {
                // < 10j
                return date.getDate() + ' ' + months[date.getMonth()];
            } else {
                month = date.getMonth() + 1;
                day = date.getDate();
                
                return (day > 9 ? day : "0" + day) + '/' + (month < 10 ? "0" + month : month) + '/' + date.getFullYear();
            }
        },
        
        getUTF8Length: function(string) {
            var utf8length = 0;
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utf8length++;
                }
                else if((c > 127) && (c < 2048)) {
                    utf8length = utf8length+2;
                }
                else {
                    utf8length = utf8length+3;
                }
            }
            return utf8length;
       }
    };
});