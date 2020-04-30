const flipping = new Flipping();

import "./index.scss";

const items = document.querySelectorAll(".item");
const detailItem = document.querySelector(".detail");
const detailScene = document.querySelector(".scene.-detail");

detailScene.style.display = "none";

items.forEach(item => {
  item.addEventListener("click", () => {
    const itemImage = item.querySelector("img");

    detailItem
      .querySelector("img")
      .setAttribute("src", itemImage.getAttribute("src"));

    detailItem.setAttribute(
      "data-flip-key",
      item.getAttribute("data-flip-key")
    );

    detailItem
        .querySelector("img")
        .removeAttribute("data-flip-key");

    flipping.read();

    detailScene.style.display = "block";
    item.style.opacity = 0;

    flipping.flip();
  });
});

detailItem.addEventListener("click", () => {
  const itemImage = document.querySelector(
    `[data-flip-key="${detailItem.getAttribute("data-flip-key")}"]`
  );

  detailItem
    .querySelector("img")
    .setAttribute("data-flip-key", detailItem.getAttribute("data-flip-key"));

  detailItem.removeAttribute("data-flip-key");

  flipping.read();

  detailScene.style.display = "none";
  itemImage.style.opacity = 1;

  flipping.flip();
});
