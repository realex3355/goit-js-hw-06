const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  if (email !== "" && password !== "") {
    const enteredData = {
      email,
      password,
    };
    console.log(enteredData);
    loginForm.reset();
  } else {
    alert("All fields must be filled!");
  }
});
