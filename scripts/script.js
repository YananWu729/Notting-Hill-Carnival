const slides = document.querySelectorAll(".carousel-slide img");
const bullets = document.querySelectorAll(".carousel-bullets .bullet");
let currentSlide = 0;
 
 
function showSlide(n) {
 
  slides.forEach((slide) => slide.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));
 
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }
 
  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
}
 
function nextSlide() {
  showSlide(currentSlide + 1);
}
 
function prevSlide() {
  showSlide(currentSlide - 1);
}
 
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
 
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showSlide(index);
  });
});
 
function autoSlide() {
  nextSlide();
}
 
// Setting up an interval to call autoSlide function every 2 seconds
setInterval(autoSlide, 2000);


document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");
   
    burgerMenu.addEventListener("click", function () {
      menu.classList.toggle("show-menu");
    });
  });



