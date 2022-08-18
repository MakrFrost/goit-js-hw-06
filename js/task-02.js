const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.querySelector("#ingredients");

const ingredient = ingredients.map((option) => {
  const createIngredient = document.createElement("li");
  createIngredient.textContent = option;
  return createIngredient;
});
allIngredients.append(...ingredient);
