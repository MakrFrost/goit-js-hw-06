const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//! 1е решение
// function addImage() {
//   const galleryEl = document.querySelector(".gallery");

//   for (const image of images) {
//     galleryEl.insertAdjacentHTML(
//       "afterbegin",
//       `<li><img src="${image.url}" alt="${image.alt}"></li>`
//     );
//   }
// }
// addImage();

// ! 2е решение
// const addImg = () => {
//   const galleryEl = document.querySelector("ul#gallery");
//   for (const img of images) {
//     galleryEl.insertAdjacentHTML(
//       `afterbegin`,
//       `<li><img src = ${img.url}
//     alt = '${img.alt}' width="630" height="375"></li>`
//     );
//   }
//   const contentStyle = document.querySelectorAll("li");
// };
// addImg();

// ! 3е решение
// const galleryEl = document.querySelector("ul#gallery");

// const imagesList = ({ url, alt }) => {
//   return `<li><img src ="${url}" alt = "${alt}"></li>`;
// };
// const addImg = images.map(imagesList).join("");
// galleryEl.insertAdjacentHTML("afterbegin", addImg);

// ! 4е решение
const galleryEl = document.querySelector(".gallery");

function createImg(images) {
  return images
    .map(({ url, alt }) => {
      return `<li><img src="${url}" alt="${alt}" width="300"></li>`;
    })
    .join("");
}

const galleryImages = createImg(images);
galleryEl.insertAdjacentHTML("beforeend", galleryImages);
