let displayValue = '0';
let currentOperator = '';
let firstOperand = null;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}

function appendDigit(digit) {
  if (displayValue === '0' || displayValue === '-0') {
    displayValue = digit;
  } else {
    displayValue += digit;
  }
  updateDisplay();
}

function setOperator(operator) {
  if (currentOperator !== '' && firstOperand !== null) {
    calculateResult();
  }
  currentOperator = operator;
  firstOperand = parseFloat(displayValue);
  displayValue = '0';
}

function calculateResult() {
  const secondOperand = parseFloat(displayValue);
  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    clearDisplay();
    return;
  }

  switch (currentOperator) {
    case '+':
      displayValue = (firstOperand + secondOperand).toString();
      break;
    case '-':
      displayValue = (firstOperand - secondOperand).toString();
      break;
    case '*':
      displayValue = (firstOperand * secondOperand).toString();
      break;
    case '/':
      if (secondOperand === 0) {
        displayValue = 'Error';
      } else {
        displayValue = (firstOperand / secondOperand).toString();
      }
      break;
  }

  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}

updateDisplay();
