//$(document).ready(function () {
//  "use strict";
//  var scroll_btn = $('#button-1'),
//    $root = $('html ,body');
//  $(window).scroll(function () {
//    var win_scroll = $(this).scrollTop();
//
//    if (win_scroll > 200) {
//      scroll_btn.show();
//    } else {
//      scroll_btn.hide();
//    }
//
//  });
//  scroll_btn.on('click', function () {
//    $root.animate({
//      scrollTop: 0
//    }, 800);
//  });
//
//});

$(document).ready(function () {
  $(window).scroll(function () {
    if ((this).scrollTop() > 40) {
      $('#button-1').show();
    } else {
      $('#button-1').hide();
    }
  });
  $("#button-1").click(function () {
    $('html ,body').animate({scrollTop : 0}, 800);
  });
});

//************************************************************************
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

//
//const backToTopButton = document.querySelector("#scrollTop");
//
//window.addEventListener("scroll", scrollfunction);
//
//function scrollfunction() {
//  if (window.pageYOffset > 300) {
//    backToTopButton.classList.add("btnEntrance");
//    backToTopButton.style.display = "block";
//  }
//  else {
//    backToTopButton.classList.add("btnExit");
//    backToTopButton.style.display = "none";
//  }
//}
//
//
//
//backToTopButton.addEventListener("click" ,backToTop);
//
//function backToTop() {
//  windo.scrollTo(0, 0);
//}
