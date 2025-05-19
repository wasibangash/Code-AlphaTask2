
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let resultShown = false;

function appendNumber(number) {
  if (resultShown) {
    currentInput = '';
    resultShown = false;
  }
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  updateDisplay(currentInput);
}

function chooseOperator(op) {
  if (currentInput === '') return;
  if (firstOperand !== '') {
    calculate();
  }
  operator = op;
  firstOperand = currentInput;
  currentInput = '';
}

function calculate() {
  if (firstOperand === '' || currentInput === '' || operator === '') return;
  let a = parseFloat(firstOperand);
  let b = parseFloat(currentInput);
  let result = 0;
  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b === 0 ? 'Error' : a / b; break;
  }
  updateDisplay(result);
  currentInput = result.toString();
  firstOperand = '';
  operator = '';
  resultShown = true;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  resultShown = false;
  updateDisplay('0');
}

function updateDisplay(value) {
  display.innerText = value;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}