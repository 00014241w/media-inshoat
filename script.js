const list = document.querySelector(".carousel-list");
const item = document.querySelector(".item");
const itemWidth = list.offsetWidth;
const maxItems = document.querySelectorAll(".carousel-list li").length;

let currentPosition = 1;

function handleClick(direction) {
  if (direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    currentPosition--;
    if (currentPosition <= 0) {
      currentPosition = maxItems;
      list.scrollTo({ left: itemWidth * maxItems, behavior: "smooth" });
    }
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
    currentPosition++;
    if (currentPosition > 4) {
      currentPosition = 1;
      list.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
}
