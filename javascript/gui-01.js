$(function() {

	var isMobile = window.matchMedia("only screen and (max-width: 768px)");

	if (isMobile.matches) {
	    $(".menu-button, .menu li").click(function() {
	    	$( ".menu" ).fadeToggle( "fast", "linear" );
	    });
	}

});