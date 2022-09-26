import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const imgs = [];

galleryItems.forEach((el) => {
  const gItem = document.createElement("div");
  gItem.className = "gallery__item";
  const gLink = document.createElement("a");
  gLink.className = "gallery__link";
  gLink.href = el.original;
  const gImg = document.createElement("img");
  gImg.className = "gallery__image";
  gImg.src = el.preview;
  gImg.setAttribute("data-source", el.original);
  gImg.alt = el.description;

  gItem.append(gLink);
  gLink.append(gImg);
  imgs.push(gItem);
});

gallery.append(...imgs);

gallery.addEventListener("click", (onClick) => {
  onClick.preventDefault();
  if (onClick.target.nodeName !== "IMG") {
    return;
  }

  const imgSelect = onClick.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
<img src="${imgSelect}" width="800" height="600">
`);

  instance.show();
// instance
// .el
// .querySelector('img')
// .addEventListener('click', instance.close);
 const escapebtn = gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
