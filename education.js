$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 53) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 53) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});
//hoverfunction for the laptop icon
function mouseOver1() {
  document.getElementById('user').innerHTML = 'After Trauma Info';
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




// Ellen's crap down below~

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
