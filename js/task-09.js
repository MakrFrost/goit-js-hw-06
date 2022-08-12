const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

button.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}
