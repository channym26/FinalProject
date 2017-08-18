$(document).ready(function() {

  $(window).scroll(function() {
    // If you hard code, then use console
    // .log to determine when you want the nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 73) {
      $('#nav_bar').addClass('navbar-fized');
  }
    if ($(window).scrollTop() < 73) {
      $('#nav_bar').removeClass('navbar-fized');
    }
  });
});
function mouseOver1() {
  document.getElementById('user').innerHTML = 'Education';
}

function mouseOut1() {
  document.getElementById('user').innerHTML = '&#10096;';
}
$('#accordion .panel-default').on('click', function () {
    $('#accordion .panel-collapse').collapse('toggle');
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
