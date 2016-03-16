// sticky navbar functionality
$(document).ready(function () {
	$(".navbar").sticky({
		topSpacing: 0
	});
});

// scroll to top
$(document).ready(function(){
	

//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
	
});


// parallax
$(function() {
    $.stellar();
});


// main flex slider
$(window).load(function() {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav: false
    });
});


// owl carousel
$(document).ready(function() {
    $("#testi-carousel").owlCarousel({
        items: 1,
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
    });
});


// counter up
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});


// magnific popup for the portfolio section of the site
jQuery(document).ready(function($) {
	$('.show-image').magnificPopup({
		type: 'image'
	});
});