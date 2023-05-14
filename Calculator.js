let resultElement = document.getElementById("result");
let operand1 = "";
let operator = "";
let operand2 = "";

function addDigit(digit) {
  if (operator === "") {
    operand1 += digit;
    resultElement.value = operand1;
  } else {
    operand2 += digit;
    resultElement.value = operand2;
  }
}

function addDecimal() {
  if (operator === "") {
    if (operand1.indexOf(".") === -1) {
      operand1 += ".";
      resultElement.value = operand1;
    }
  } else {
    if (operand2.indexOf(".") === -1) {
      operand2 += ".";
      resultElement.value = operand2;
    }
  }
}

function addOperator(op) {
  if (operator === "") {
    operator = op;
  } else {
    calculateResult();
    operator = op;
  }
}

function clearResult() {
  operator = "";
  operand1 = "";
  operand2 = "";
  resultElement.value = "";
}

function calculateResult() {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "*":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "/":
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
  }
  resultElement.value = result;
  operand1 = result.toString();
  operator = "";
  operand2 = "";
}
