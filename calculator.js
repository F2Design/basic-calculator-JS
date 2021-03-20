const buttonNumbers = document.getElementsByName("data-number");

const buttonOpera = document.getElementsByName("data-opera");
const buttonEqual = document.getElementsByName("data-equal")[0];
const buttonDelete = document.getElementsByName("data-delete")[0];

var result = document.getElementById("result");
var currentOperation = "";
var previousOperation = "";
var operation = undefined;

buttonNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
  });
});

buttonOpera.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOperation(button.innerText);
  });
});

buttonEqual.addEventListener("click", function () {
  calculate();
  upgradeDisplay();
});

buttonDelete.addEventListener("click", function () {
  clear();
  upgradeDisplay();
});

function selectOperation(op) {
  if (currentOperation === "") return;
  if (previousOperation !== "") {
    calculate();
  }
  operation = op.toString();
  previousOperation = currentOperation;
  currentOperation = "";
}
function calculate() {
  var calculation;
  const previous = parseFloat(previousOperation);
  const current = parseFloat(currentOperation);
  if (isNaN(previous) || isNaN(current)) return;
  switch (operation) {
    case "+":
      calculation = previous + current;
      break;
    case "-":
      calculation = previous - current;
      break;
    case "X":
      calculation = previous * current;
      break;
    case "/":
      calculation = previous / current;
      break;
    default:
      return;
  }
  currentOperation = calculation;
  operation = undefined;
  previousOperation = "";
}

function addNumber(num) {
  currentOperation = currentOperation.toString() + num.toString();
  upgradeDisplay();
}
function clear() {
  currentOperation = "";
  previousOperation = "";
  operation = undefined;
}

function upgradeDisplay() {
  result.value = currentOperation;
}

clear();
