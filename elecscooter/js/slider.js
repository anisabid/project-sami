const contSlides = document.querySelectorAll(".js--slider .js--slide").length;
const $slides = document.querySelector(".js--slides");
$slides.style.width = contSlides * 100 + "vw";
var currentSlide = 0;

function changeSlide() {
  currentSlide++;
  currentSlide = currentSlide % contSlides === 0 ? 0 : currentSlide;
  $slides.style.marginLeft = -(currentSlide * 100) + "vw";
}

setInterval("changeSlide()", 2000);
