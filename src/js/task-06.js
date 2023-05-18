const inputCheck = document.querySelector("#validation-input");
const corLength = inputCheck.dataset.length;

inputCheck.addEventListener("blur", () => {
  if (inputCheck.value.length === Number.parseInt(corLength)) {
    inputCheck.classList.add("valid");
    inputCheck.classList.remove("invalid");
    inputCheck.style.borderColor = "#4caf50";
  } else {
    inputCheck.classList.add("invalid");
    inputCheck.classList.remove("valid");
    inputCheck.style.borderColor = "#f44336";
  }
  console.log("class", inputCheck.classList);
  console.log(inputCheck.value.length);
});
