const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML += `${year}`;

let outputValue = "";
let inputValue = "0";
let tempNum;
let operatorValue = "";

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
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      inputHandler(button);
      break;
    case "Clear":
      inputValue = "0";
      input.textContent = inputValue;
      outputValue = "";
      output.textContent = outputValue;

      num1 = undefined;
      num2 = undefined;
      operator = undefined;
      break;
    case "Delete":
      inputValue = inputValue.slice(0, -1);
      input.textContent = inputValue;
      // reset to "0" whenever string length is 0
      if (inputValue.length === 0) {
        inputValue = "0";
        input.textContent = inputValue;
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
    case "=":
      operatorHandler(button);
      break;
    default:
      console.error("INPUT DOES NOT EXIST");
      break;
  }
}

function operatorHandler(operatorTemp) {
  if (outputValue === "") {
    operatorValue = operatorTemp;

    outputValue = inputValue;
    output.textContent = outputValue;

    inputValue = "0";
    input.textContent = inputValue;
    return;
  }

  if (operatorValue === "=") {
    operatorValue = operatorTemp;
    return;
  }

  if (outputValue != "") {
    switch (operatorValue) {
      case "+":
      case "-":
      case "×":
      case "÷":
        outputValue = operate(operatorValue, outputValue, inputValue);
        output.textContent = outputValue;
        inputValue = "0";
        input.textContent = inputValue;

        operatorValue = operatorTemp;
        break;
      case "=":
        outputValue = operate(operatorValue, outputValue, inputValue);
        output.textContent = outputValue;
        inputValue = "0";
        input.textContent = inputValue;

        operatorValue = "";
        break;
      default:
        break;
    }
  }
}

function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "×") return multiply(num1, num2);
  if (operator === "÷") return divide(num1, num2);
}

function add(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a + b;
}

function subtract(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a - b;
}

function multiply(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a * b;
}

function divide(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a / b;
}
