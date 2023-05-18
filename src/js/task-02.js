const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");
const listIngred = [];
ingredients.forEach((element) => {
  const ingred = document.createElement("li");
  ingred.textContent = element;
  ingred.classList.add("item");
  listIngred.push(ingred);
});
ul.append(...listIngred);
