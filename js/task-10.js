function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.getElementById("controls");
const inputAmount = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");
createButton.addEventListener("click", () => {
  const amount = inputAmount.value;

  if (amount <= 0 || amount > 100) {
    alert("Proszę wybrać liczbę od 1 do 100.");
    return;
  }

  createBoxes(amount);
});
destroyButton.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const initialSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = initialSize + i * 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesDiv.appendChild(fragment);
}
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
