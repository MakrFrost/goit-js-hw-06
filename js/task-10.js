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

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// ! гит
// const input = document.querySelector("#controls input");
// const createboxBtn = document.querySelector('[data-action="render"]');
// const deleteboxBtn = document.querySelector('[data-action="destroy"]');

// createboxBtn.addEventListener("click", createbox);
// deleteboxBtn.addEventListener("click", deletebox);

// const boxes = document.querySelector("#boxes");
// const inputChange = (e) => {
//   input.setAttribute("count", Number(e.currentTarget.value));
//   console.log(Number(e.currentTarget.value));
// };
// input.addEventListener("input", inputChange);

// let baseboxSize = 30;

// function random_bg_color() {
//   let x = Math.floor(Math.random() * 256);
//   let y = Math.floor(Math.random() * 256);
//   let z = Math.floor(Math.random() * 256);
//   let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//   return bgColor;
// }
// random_bg_color();

// const createbox = () => {
//   let countBox = Number(input.getAttribute("count"));
//   for (let i = 0; i < countBox; i++) {
//     baseboxSize += 10;
//     const newBox = document.createElement("div");
//     newBox.style.background = random_bg_color();
//     newBox.style.height = baseboxSize + "px";
//     newBox.style.width = baseboxSize + "px";
//     newBox.style.margin = "10px";
//     newBox.classList.add("new-box");
//     boxes.append(newBox);
//   }
// };

// const deletebox = () => {
//   const allNewBoxes = document.querySelectorAll(".new-box");
//   for (let allNewBoxe of allNewBoxes) {
//     boxes.removeChild(allNewBoxe);
//   }
//   baseboxSize = 30;
// };

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
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
