const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML += `${year}`;

let outputValue = "";
let inputValue = "0";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
output.textContent = outputValue;
input.textContent = inputValue;

const buttons = document.querySelectorAll(".calc-button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", handleButtons);
});

// logic for handling numerical inputs
function inputHandler(button) {
  if (inputValue.includes(".") && button === ".") {
    return;
  }
  if (inputValue === "0" && button === "0") {
    return;
  }
  if (inputValue === "0" && button === ".") {
    inputValue += button;
    input.textContent = inputValue;
    return;
  }
  if (inputValue === "0" && button !== "0") {
    inputValue = button;
    input.textContent = inputValue;
    return;
  }
  inputValue += button;
  input.textContent = inputValue;
}

// switch statement to handle all buttons
function handleButtons(e) {
  const button = e.target.textContent;
  switch (button) {
    case "0":
      inputHandler(button);
      break;
    case "1":
      inputHandler(button);
      break;
    case "2":
      inputHandler(button);
      break;
    case "3":
      inputHandler(button);
      break;
    case "4":
      inputHandler(button);
      break;
    case "5":
      inputHandler(button);
      break;
    case "6":
      inputHandler(button);
      break;
    case "7":
      inputHandler(button);
      break;
    case "8":
      inputHandler(button);
      break;
    case "9":
      inputHandler(button);
      break;
    case ".":
      inputHandler(button);
      break;
    case "Clear":
      inputValue = "0";
      input.textContent = inputValue;
      break;
    case "Delete":
      console.log(button);
      break;
    case "+":
      console.log(button);
      break;
    case "-":
      console.log(button);
      break;
    case "×":
      console.log(button);
      break;
    case "÷":
      console.log(button);
      break;
    case "=":
      console.log(button);
      break;

    default:
      console.error("INPUT DOES NOT EXIST");
      break;
  }
}

function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "×") return multiply(num1, num2);
  if (operator === "÷") return divide(num1, num2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
