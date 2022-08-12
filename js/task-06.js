const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add("invalid");
    return;
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
