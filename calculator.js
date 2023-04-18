const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML += `${year}`;

let outputValue = "0";
let inputValue = "0";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
output.textContent = outputValue;
input.textContent = inputValue;

const buttons = document.querySelectorAll(".calc-button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", handleButtons);
});

function handleButtons(e) {
  const button = e.target.innerHTML;
  switch (button) {
    case "0":
      console.log(button);
      break;
    case "1":
      console.log(button);
      break;
    case "2":
      console.log(button);
      break;
    case "3":
      console.log(button);
      break;
    case "4":
      console.log(button);
      break;
    case "5":
      console.log(button);
      break;
    case "6":
      console.log(button);
      break;
    case "7":
      console.log(button);
      break;
    case "8":
      console.log(button);
      break;
    case "9":
      console.log(button);
      break;
    case "Clear":
      console.log(button);
      break;
    case "Delete":
      console.log(button);
      break;
    case "0":
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
    case ".":
      console.log(button);
      break;
    case "=":
      console.log(button);
      break;

    default:
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
