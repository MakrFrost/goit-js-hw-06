const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", newName);

function newName(event) {
  console.log(event.currentTarget.value);
  output.textContent = event.currentTarget.value;
}
