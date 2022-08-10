const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i += 1) {
  let parentIngredients = document.querySelector("#ingredients");
  let item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");
  parentIngredients.append(item);
}
