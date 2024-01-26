const validationInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationInput.getAttribute("data-length"));
validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  if (inputValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
