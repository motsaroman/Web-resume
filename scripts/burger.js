const bodyElem = document.querySelector(".body");
const burger = document.querySelector(".burger");
const burgerSpan = document.querySelector("span");
const burgerNavbar = document.querySelector(".burger__navbar");
burger.addEventListener("click", (e) => {
  if (e.currentTarget) {
    burgerSpan.classList.toggle("active");
    burgerNavbar.classList.toggle("active");
  }
});
const burgerNavbarMenu = document
  .querySelector(".burger__navbar-menu")
  .addEventListener("click", (e) => {
    if (e.currentTarget) {
      console.log(e.currentTarget);
      burgerNavbar.classList.remove("active");
      burgerSpan.classList.remove("active");
    }
  });
