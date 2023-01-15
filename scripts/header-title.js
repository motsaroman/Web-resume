const bodyElement = document.querySelector(".body");
const h3 = document.querySelector("h3");
bodyElement.addEventListener("mouseover", (e) => {
  if (e.target) {
    h3.classList.add("active");
  }
});
