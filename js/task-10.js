// const createButton = document.querySelector("[data-create]");
// const destroyButton = document.querySelector("[data-destroy]");
// const inputField = document.querySelector("#controls input");

// createButton.addEventListener("click", createBoxes(inputField.value));
// destroyButton.addEventListener("click");
// inputField.addEventListener("click");

// function createBoxes(amount) {
//   let parentBox = document.querySelector("#boxes");
//   let itemBox = document.createElement("div") * amount;
//   let color = getRandomHexColor();
//   itemBox.style.backgroundColor = color;
//   parentBox.append(itemBox);
// }

// ! интернет
let render = document.querySelector("[data-create]");
let destroy = document.querySelector("[data-destroy]");
let boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    console.log(
      (div.style.cssText = `width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}`)
    );
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
