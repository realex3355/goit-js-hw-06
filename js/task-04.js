let counterValue = 0;
const decrBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const display = document.querySelector("#value");
decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  console.log("button clicked");
  display.textContent = counterValue;
});
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  display.textContent = counterValue;
});
