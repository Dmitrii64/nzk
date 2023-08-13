//mobile-menu
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__links");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_open");
  menu.classList.toggle("header__links_open");
})