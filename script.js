$(document).ready(function(){
	$('.navList a').mouseenter(function(){
    	$(this).css('background-color', '#be9b7b');
   		$(this).css('color', '#3c2f2f');
	});
	
	$('.navList a').mouseleave(function(){
    	$(this).css('background-color', '');
    	$(this).css('color', '');
	});

	$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

	    	var target = this.hash;
	    	var $target = $(target);

	    	$('html, body').stop().animate({
	        	'scrollTop': $target.offset().top
	    	}, 900, 'swing', function () {
	        	window.location.hash = target;
	    	});
	});
    	
});