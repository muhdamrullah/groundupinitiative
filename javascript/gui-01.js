$(function() {

	var isMobile = window.matchMedia("only screen and (max-width: 767px)");

	if (isMobile.matches) {
	    $(".menu-button, .menu li").click(function() {
	    	$( ".menu" ).fadeToggle( "fast", "linear" );
	    });
	}

	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);

	      if (isMobile.matches) {
	          	$( ".menu" ).fadeToggle( "fast", "linear" );
	      }

	      return false;
	    }
	  }
	});

});