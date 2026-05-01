const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

// mostrar slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
}

// próximo
function proximoSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// anterior
function slideAnterior() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// clique no slider
const slider = document.querySelector(".slider");

slider.addEventListener("click", function(event) {

  let largura = slider.clientWidth;
  let cliqueX = event.offsetX;

  if (cliqueX < largura / 2) {
    slideAnterior();
  } else {
    proximoSlide();
  }

});

// iniciar
showSlide(currentSlide);