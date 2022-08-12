const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation() {
  if (input.textContent.length === input.dataset.length) {
    input.classList.add("valid");
    return;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
