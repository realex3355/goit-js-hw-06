const fontSizeHandle = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
textSize.style.fontSize = `${fontSizeHandle.value}px`;
fontSizeHandle.addEventListener("input", () => {
  textSize.style.fontSize = `${fontSizeHandle.value}px`;
});
