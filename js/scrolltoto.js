$(document).ready(function () {
  $(window).scroll(function () {
    if ((this).scrollTop() > 40) {
      $('#Scroll').fadeIn();
    } else {
      $('#Scroll').fadeOut();
    }
  });
  $("#Scroll").click(function () {
    $('html ,body').animate({scrollTop : 0}, 800);
  });
});