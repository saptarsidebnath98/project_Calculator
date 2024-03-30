//functions for add, substract, multiply, divide:
const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

//creating three variables for input operation:
let firstNum;
let operator;
let secondNum;

//creating operate function to calculate with the functions above:
const operate = function (firstNum, operator, secondNum) {
  if (operator == "+") {
    return add(firstNum, secondNum);
  } else if (operator == "-") {
    return substract(firstNum, secondNum);
  } else if (operator == "*") {
    return multiply(firstNum, secondNum);
  } else if (operator == "/") {
    return divide(firstNum, secondNum);
  }
};

//variables for display and history:
const display = document.querySelector(".display");
const history = document.querySelector(".history");

//adding functionality to digit buttons:
const button1 = document.querySelector(".digit1");
const button2 = document.querySelector(".digit2");
const button3 = document.querySelector(".digit3");
const button4 = document.querySelector(".digit4");
const button5 = document.querySelector(".digit5");
const button6 = document.querySelector(".digit6");
const button7 = document.querySelector(".digit7");
const button8 = document.querySelector(".digit8");
const button9 = document.querySelector(".digit9");
const button0 = document.querySelector(".digit0");
const buttons = [
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
];

buttons.map((item) => {
  item.addEventListener("click", () => {
    display.textContent += item.textContent;
    history.textContent += item.textContent;
  });
});

//adding functionality to operator buttons:
let operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((item) => {
  item.addEventListener("click", () => {
    firstNum = parseInt(display.textContent);
    operator = item.textContent;
    history.textContent += item.textContent;
    display.textContent = "";
  });
});

//adding functionality to equal button:
let result;
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
  if (!firstNum) {
    result = "ERROR";
  } else {
    secondNum = parseInt(display.textContent);
    console.log(firstNum, operator, secondNum);
    result = operate(firstNum, operator, secondNum);
    console.log(result);
  }

  display.textContent = result;
});

//adding functionality to clear button:
const clrBtn = document.querySelector(".clear");
clrBtn.addEventListener("click", () => {
  display.textContent = "";
  history.textContent = "";
});
