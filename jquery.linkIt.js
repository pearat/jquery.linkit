/*
* name: LinkIt
* author: Timbo Baggins
* version: 0.1.0
* license: MIT
*/

(function($) {
 
    $.fn.linkIt = function(options) {
        // Default Settings
        var settings = $.extend({
            href : null,
            text : null,
            target:'_self'
        }, options);
        
        // Validation
        if(settings.href == null){
            console.log('The "href" option is required in order for LinkIt to work');
            return this;
        }
        
        return this.each(function(){
            var object = $(this);
            if(settings.text == null){
                settings.text = object.text();   
            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'">').text(settings.text);
        });
        
    }
 }(jQuery));