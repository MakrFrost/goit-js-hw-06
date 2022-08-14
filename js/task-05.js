const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", newName);

function newName(event) {
  output.textContent = event.currentTarget.value;
  if (output.textContent === "") {
    output.textContent = "Anonymus";
  }
}
