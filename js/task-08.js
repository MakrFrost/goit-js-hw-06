const form = document.querySelector(".login-form");
const inputArray = document.querySelectorAll("input");
const buttonSubmit = document.querySelector("button");

form.addEventListener("submit", callbackForm);

function callbackForm(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((name, value) => {
    console.log(name);
    console.log(value);
  });
}

// email.addEventListener("blur");
// password.addEventListener("blur");
// buttonSubmit.addEventListener("click", checkLogin);

// const formElements = event.currentTarget.elements;
// console.log(formElements);
// const email = formElements.email.value;
// console.log(email);
// const password = formElements.password.value;
// console.log(password);

// function checkLogin() {
//   event.preventDefault();
// }
// const newInputArray = [...inputArray];
// console.log(newInputArray);

// const checkedInput = newInputArray.every((inputEl, newInputArray) =>
//   console.log(inputEl)
// );

// console.log(checkedInput);

// buttonSubmit.addEventListener("click", callbackCheck);
// function callbackCheck() {
//   if (checkedInput === true) {
//     console.log("gdsfgzdrsg");
//   }
// }
