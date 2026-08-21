const carousel = document.querySelector('.downsell-carousel');

if (carousel) {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('.carousel-dot')];
  let activeSlide = 0;
  let timer;

  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
    dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === activeSlide));
  };

  const startTimer = () => {
    timer = window.setInterval(() => showSlide(activeSlide + 1), 5000);
  };

  carousel.querySelector('.carousel-prev').addEventListener('click', () => showSlide(activeSlide - 1));
  carousel.querySelector('.carousel-next').addEventListener('click', () => showSlide(activeSlide + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
  carousel.addEventListener('mouseenter', () => window.clearInterval(timer));
  carousel.addEventListener('mouseleave', startTimer);
  startTimer();
}
