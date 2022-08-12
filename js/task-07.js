const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("mousemove", fontResize);

function fontResize() {
  text.style.fontSize = `${rangeInput.value}px`;
}
