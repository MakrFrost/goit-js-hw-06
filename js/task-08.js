const form = document.querySelector(".login-form");
const inputArray = document.querySelectorAll("input");
const buttonSubmit = document.querySelector("button");

form.addEventListener("submit", callbackForm);

function callbackForm(event) {
  event.preventDefault();

  const form = event.currentTarget.elements;
  const email = form.email.value;
  const password = form.password.value;

  if (email === "" || password === "") {
    alert("Заполните все поля!");
  } else
    return (
      console.log({ email: email, password: password }),
      document.querySelector(".login-form").reset()
    );
}
