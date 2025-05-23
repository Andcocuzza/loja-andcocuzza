// Slider automático
const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(currentSlide); // Mostra o primeiro slide inicialmente
  setInterval(nextSlide, 4000); // Troca de slide a cada 4 segundos
}
