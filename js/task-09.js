function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.body;
const colorTextElement = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorTextElement.textContent = randomColor;
});
