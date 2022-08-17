let createBtn = document.querySelector("[data-create]");
let destroyBtn = document.querySelector("[data-destroy]");
let boxes = document.getElementById("boxes");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

// Достаем кол-во из инпута, и пихаем кол-во в создание боксов
function getAmount() {
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  // задаем базовые размеры блока
  let baseSize = 30;
  // создаем новый фрагмент(див)
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = baseSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
