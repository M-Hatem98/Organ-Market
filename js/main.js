(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});
  
});


$(document).ready(function() {
	$('#play-video').on('click', function(ev) {
		this.style.display = 'none';
		thevid = document.getElementById('video');
		thevid.style.display = 'block';
		$("#video")[0].src += "?autoplay=1";
		ev.preventDefault();

	});
});
/******************************************************/
//var btn = $('#button-1');
//
//$(window).scroll(function() {
//  if ($(window).scrollTop() > 300) {
//    btn.addClass('show');
//  } else {
//    btn.removeClass('show');
//  }
//});
//
//btn.on('click', function(e) {
//  e.preventDefault();
//  $('html, body').animate({scrollTop:0}, '300');
//});

//$(document).ready(function() {
//  
//  //Pour afficher le bouton 
//    var offset = 120;
//    var duration = 500;
//    $(window).scroll(function() {
//        if (jQuery(this).scrollTop() > offset) {
//            $('.back-to-top').fadeIn(duration);
//        } else {
//            $('.back-to-top').fadeOut(duration);
//        }
//    });
//  
//  //Pour le smoth scroll
//  $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//     	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      	var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//       		$('html,body').animate({
//          scrollTop: target.offset().top
//          }, 500);
//          return false;
//          }
//        }
//    });
//	});
//});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 300) { 
            $('#backToTop').fadeIn(); 
        } else { 
            $('#backToTop').fadeOut(); 
        } 
    }); 
    $('#backToTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


//jQuery(document).ready(function($){
//    $(window).scroll(function(){
//        if ($(this).scrollTop() > 50) {
//            $('#backToTop').fadeIn('slow');
//        } else {
//            $('#backToTop').fadeOut('slow');
//        }
//    });
//    $('#backToTop').click(function(){
//        $("html, body").scrollTop(0);
//        return false;
//    });
//});
//
//jQuery(document).ready(function($){
//    $(window).scroll(function(){
//        if ($(this).scrollTop() > 50) {
//            $('#backToTop').fadeIn('slow');
//        } else {
//            $('#backToTop').fadeOut('slow');
//        }
//    });
//    $('#backToTop').click(function(){
//        $("html, body").animate({ scrollTop: 0 }, 500);
//        return false;
//    });
//});

//
//$('#backToTop').click(function(){
//  $('html').animate({scrollTop:0}, "slow");
//});
//










