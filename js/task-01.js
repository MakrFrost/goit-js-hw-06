const elements = document.querySelector("ul");
console.log(`Number of categories: `, elements.children.length);

const childrensTitle = document.querySelectorAll(".item");

childrensTitle.forEach((element) => {
  console.log(`Category :`, element.firstElementChild.textContent);
  console.log(`Elements :`, element.lastElementChild.children.length);
});
