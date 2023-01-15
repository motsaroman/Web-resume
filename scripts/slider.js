const img = document.querySelector(".first__image");

const arrImg = [
  "/images/photo1.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
];

let currentIndex = 0;
function changeIndex(ind) {
  currentIndex = ind;
  slide(currentIndex);
}

function nextIndex(direction) {
  currentIndex += direction;
  if (currentIndex >= arrImg.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = arrImg.length - 1;
  }
  slide(currentIndex);
}
document
  .querySelector(".slider__arrow_back")
  .addEventListener("click", function () {
    nextIndex(-1);
  });
document
  .querySelector(".slider__arrow_next")
  .addEventListener("click", function (e) {
    nextIndex(1);
  });
function slide(index) {
  img.style.display = "none";
  setTimeout(() => {
    img.style.display = "block";
  }, 0);
  img.src = arrImg[index];
}
