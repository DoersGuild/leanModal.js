(function($) {

    $.fn.extend({

        leanModal : function(options) {

            var defaults = {
                top : 100,
                overlay : 0.5,
                closeButton : null
            }

            var overlay = $("<div id='lean_overlay'/>").css({
                'position' : 'fixed',
                'z-index' : '100000000',
                'top' : '0px',
                'left' : '0px',
                'height' : '100%',
                'width' : '100%',
                'background' : '#000',
                'display' : 'none'
            });

            $("body").append(overlay);

            options = $.extend(defaults, options);

            return this.each(function() {

                var o = options;

                var modal_id = $(this);

                $("#lean_overlay").click(function() {
                    close_modal(modal_id);
                });

                $(o.closeButton).click(function() {
                    close_modal(modal_id);
                });

                var modal_height = $(modal_id).outerHeight();
                var modal_width = $(modal_id).outerWidth();

                $('#lean_overlay').css({
                    'display' : 'block',
                    opacity : 0
                });

                $('#lean_overlay').fadeTo(200, o.overlay);

                $(modal_id).css({

                    'display' : 'block',
                    'position' : 'fixed',
                    'opacity' : 0,
                    'z-index' : parseInt($("#lean_overlay").css("z-index")) + 1000,
                    'left' : 50 + '%',
                    'margin-left' : -(modal_width / 2) + "px",
                    'top' : o.top + "px"

                });

                $(modal_id).fadeTo(200, 1);

                e.preventDefault();

            });

            function close_modal(modal_id) {

                $("#lean_overlay").fadeOut(200);

                $(modal_id).css({
                    'display' : 'none'
                });

            }

        }
    });

})(jQuery);
