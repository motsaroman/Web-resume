const navlinkAbout = document.querySelector(".navbar__list.one");
const navlinkStack = document.querySelector(".navbar__list.two");
const navLinkExpirience = document.querySelector(".navbar__list.three");
const navLinkMyContacts = document.querySelector(".navbar__list.four");
const navBlockStack = document.querySelector(".nav__block-two");
const navBlockAbout = document.querySelector(".nav__block-one");
const navBlockExpirience = document.querySelector(".nav__block-three");
const navBlockMyContacts = document.querySelector(".nav__block-four");

navlinkAbout.addEventListener("click", (e) => {
  if (e.currentTarget) {
    navBlockAbout.scrollIntoView();
  }
});

navlinkStack.addEventListener("click", (e) => {
  if (e.currentTarget) {
    navBlockStack.scrollIntoView();
  }
});
navLinkExpirience.addEventListener("click", (e) => {
  if (e.currentTarget) {
    navBlockExpirience.scrollIntoView();
  }
});
navLinkMyContacts.addEventListener("click", (e) => {
  if (e.currentTarget) {
    navBlockMyContacts.scrollIntoView();
  }
});
const animBlock = document.querySelector(".about-me__right ");
const block = document.querySelector(".about-me__block");
block.addEventListener("mouseover", (e) => {
  if (e.currentTarget) {
    animBlock.classList.add("active");
  }
});

const header = document.querySelector(".header");
const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", (e) => {
  if (e.currentTarget) {
    header.scrollIntoView();
  }
});

const burgerLinkAbout = document
  .querySelector(".burger__navbar_list.about")
  .addEventListener("click", (e) => {
    if (e.currentTarget) {
      navBlockAbout.scrollIntoView();
    }
  });
const burgerLinkStack = document
  .querySelector(".burger__navbar_list.stack")
  .addEventListener("click", (e) => {
    if (e.currentTarget) {
      navBlockStack.scrollIntoView();
    }
  });
const burgerLinkExperience = document
  .querySelector(".burger__navbar_list.experience")
  .addEventListener("click", (e) => {
    if (e.currentTarget) {
      navBlockExpirience.scrollIntoView();
    }
  });
const burgerLinkContacts = document
  .querySelector(".burger__navbar_list.contacts")
  .addEventListener("click", (e) => {
    if (e.currentTarget) {
      navBlockMyContacts.scrollIntoView();
    }
  });
