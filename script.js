$(document).ready(function(){
	$('.navList a').mouseenter(function(){
    	$(this).css('background-color', '#be9b7b');
   		$(this).css('color', '#3c2f2f');
	});
	
	$('.navList a').mouseleave(function(){
    	$(this).css('background-color', '');
    	$(this).css('color', '');
	});
});