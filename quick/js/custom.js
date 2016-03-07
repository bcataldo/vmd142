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

