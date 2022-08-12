const remove = document.querySelector('button[data-action="decrement"]');
const add = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

add.addEventListener("click", addNumber);
remove.addEventListener("click", removeNumber);

let counterValue = Number(value.textContent);

function addNumber() {
  value.textContent = counterValue += 1;
}

function removeNumber() {
  value.textContent = counterValue -= 1;
}
