// script.js
$(document).ready(function() {
  var currentIndex = 0;
  var slides = $(".slide");
  var totalSlides = slides.length;

  $(".next").click(function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  $(".prev").click(function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  function showSlide(index) {
    var slideWidth = $(".slider").width();
    var offset = -index * slideWidth;
    $(".slides").css("transform", "translateX(" + offset + "px)");
  }
});
