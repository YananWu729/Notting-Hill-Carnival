let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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



document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");
   
    burgerMenu.addEventListener("click", function () {
      menu.classList.toggle("show-menu");
    });
  });



  function toggleContent(event) {
    var button = event.target;
    var content = button.parentElement.getElementsByClassName("moreContent")[0]; 

    console.log(button);

    if (content.style.display === "none") {
      content.style.display = "block"; 
      button.innerText = "Read less"
    } else {
      content.style.display = "none"; 
      button.innerText = "Read more";  
    }
  }
  
  




