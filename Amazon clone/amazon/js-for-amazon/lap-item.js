//for slide 



$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 10,  // Number of slides to show
      slidesToScroll: 1,  // Number of slides to scroll
      autoplay: true,
      autoplaySpeed: 800,  // Autoplay speed in milliseconds
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',  // Custom left arrow
      nextArrow: '<button type="button" class="slick-next">&#9655;</button>'   // Custom right arrow
    });
  });