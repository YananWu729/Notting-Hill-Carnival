document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector("#navbar > nav > ul");
   
    burgerMenu.addEventListener("click", function () {
      menu.classList.toggle("show-menu");
    });
  });
 


