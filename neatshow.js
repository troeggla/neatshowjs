/*    neatShow.js
 *    version v1.2 (06/2013)
 *    Copyright 2013 Steve Papadopoulos.
 *    Released under the MIT license.
 *    http://stevepapa.com/neatshowjs
 *    Dependencies: jQuery v1.4+
 */

(function( $ ) {

    jQuery.fn.neatShow = function (option) {
        var selection = this;
        var settings = $.extend({
            minSpeed: 400,
            maxSpeed: 1800,
            speed: null,
            mode: null
        }, option);

        if (settings.mode === 'container') {
            selection = this.find('img:not(:visible)');
        }

        var neat = function(){
            var speed = settings.speed;

            if (speed === 'random') {
                speed = Math.floor(Math.random() * (settings.maxSpeed - settings.minSpeed + 1) + settings.minSpeed);
            }

            $(this).fadeIn(speed);
        };

        return selection.each(function () {
            if (this.complete || this.readyState == 'complete') {
                neat.call(this);
            } else {
                $(this).load(neat);
            }
        });
    };

}( jQuery ));
