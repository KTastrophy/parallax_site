$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $currentBackground = $(this);
        var window = self;
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $currentBackground.data('speed'));

            var coordinates = '50% '+ yPos + 'px';

            $currentBackground.css({ backgroundPosition: coordinates });
        });
    });
});