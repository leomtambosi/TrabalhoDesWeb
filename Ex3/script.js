const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let slideInterval = setInterval(showNextSlide, 3000); // Transição automática a cada 3 segundos

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Controle dos botões
nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  showNextSlide();
  slideInterval = setInterval(showNextSlide, 3000);
});

prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  showPrevSlide();
  slideInterval = setInterval(showNextSlide, 3000);
});
