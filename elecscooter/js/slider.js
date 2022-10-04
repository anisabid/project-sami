const contSlides = document.querySelectorAll(".js--slider .js--slide").length;
const $slides = document.querySelector(".js--slides");
$slides.style.width = contSlides * 99 + "vw";
var currentSlide = 0;

function changeSlide() {
  currentSlide++;
  currentSlide = currentSlide % contSlides === 0 ? 0 : currentSlide;
  $slides.style.marginLeft = -(currentSlide * 99) + "vw";
}

setInterval("changeSlide()", 4000);
