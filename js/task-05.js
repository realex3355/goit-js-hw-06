const enterName = document.querySelector("#name-input");
const takeName = document.querySelector("#name-output");
enterName.addEventListener("input", () => {
  if (enterName.value === "") {
    takeName.textContent = "Anonymous";
  } else {
    takeName.textContent = enterName.value;
  }
});
