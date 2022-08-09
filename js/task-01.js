const elements = document.querySelector("ul").children.length;
console.log(`Number of categories: ${elements}`);

const itemParent = document.querySelector(".item");
const items = itemParent.getElementsByTagName("h2").textContent;
console.log(`Category: ${items}`);
