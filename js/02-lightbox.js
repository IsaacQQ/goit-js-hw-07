import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const imgs = [];

galleryItems.forEach((el) => {
  const gLink = document.createElement("a");
  gLink.className = "gallery__link";
  gLink.href = el.original;
  const gImg = document.createElement("img");
  gImg.className = "gallery__image";
  gImg.src = el.preview;
  gImg.setAttribute("title", el.description);
  gImg.alt = el.description;

  gLink.append(gImg);
  imgs.push(gLink);
});

gallery.append(...imgs);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
