import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryDiv = document.querySelector('.gallery')
const store ={lightbox : null}
const markup = galleryItems.reduce(
  (acc, {preview, original, description}) =>
  acc +
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class = "gallery__image"
    src = "${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`,
    ""
);

galleryDiv.insertAdjacentHTML("beforeend", markup);

galleryDiv.addEventListener("click", onGalleryClick);

function onGalleryClick(evt){
  console.log(evt)
  evt.preventDefault();
  const galleryItem = evt.target.closest('.gallery__item');
  if(!galleryItem) return;
  
  const img = galleryItem.querySelector('.gallery__image')
  const src = img.dataset.source;
  showModal(src);
}
function showModal(src){
  const basicLightbox = window.basicLightbox;
  const instance = basicLightbox.create(getBigImgTemplate(src));
  instance.show();
  store.lightbox = instance


function getBigImgTemplate(src){
  return `
  <img src="${src}" width="800" height="600">
  `;
}

}

window.addEventListener("keydown", onKeyDown);
function onKeyDown(evt){
  if(evt.key !== "Escape") return;
  if (store.lightbox && store.lightbox.close){
    instance.close();
  }
}

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// // console.log(galleryItems);
// const gallery = document.querySelector(".gallery");
// const imgs = [];

// galleryItems.forEach((el) => {
//   const gItem = document.createElement("div");
//   gItem.className = "gallery__item";
//   const gLink = document.createElement("a");
//   gLink.className = "gallery__link";
//   gLink.href = el.original;
//   const gImg = document.createElement("img");
//   gImg.className = "gallery__image";
//   gImg.src = el.preview;
//   gImg.setAttribute("data-source", el.original);
//   gImg.alt = el.description;

//   gItem.append(gLink);
//   gLink.append(gImg);
//   imgs.push(gItem);
// });

// gallery.append(...imgs);

// gallery.addEventListener("click", (onClick) => {
//   onClick.preventDefault();
//   if (onClick.target.nodeName !== "IMG") {
//     return;
//   }

//   const imgSelect = onClick.target.getAttribute("data-source");

//   const instance = basicLightbox.create(`
// <img src="${imgSelect}" width="800" height="600">
// `);

//   instance.show();
// // instance
// // .el
// // .querySelector('img')
// // .addEventListener('keydown', instance.close);
//  const escapebtn = gallery.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// });
