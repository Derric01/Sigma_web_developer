// Store the function expression
let userFunction = '';

// Show the selected tab
function showTab(tabName) {
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.classList.add('hidden'));

  document.getElementById(tabName).classList.remove('hidden');
}

// Update display
function updateDisplay(value) {
  const display = document.getElementById('display');
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Append value to display
function append(value) {
  const display = document.getElementById('display');
  display.innerText = display.innerText === '0' ? value : display.innerText + value;
}

// Clear display
function clearDisplay() {
  document.getElementById('display').innerText = '0';
}

// Delete the last character
function deleteLast() {
  const display = document.getElementById('display');
  display.innerText = display.innerText.slice(0, -1) || '0';
}

// Calculate the result
function calculate() {
  const display = document.getElementById('display');
  try {
    display.innerText = eval(display.innerText.replace('^', '**'));
  } catch (e) {
    display.innerText = 'Error';
  }
}

// Define the custom function
function defineFunction() {
  const funcInput = document.getElementById('functionDef').value;
  userFunction = funcInput.replace('f(x) = ', '').trim();
  alert(`Function defined: f(x) = ${userFunction}`);
}

// Evaluate the function at the given x value
function evaluateFunction() {
  const xValue = parseFloat(document.getElementById('functionEval').value);
  if (isNaN(xValue)) {
    alert("Please enter a valid number for x.");
    return;
  }

  try {
    const func = new Function('x', `return ${userFunction.replace(/x/g, '(x)')}`);
    const result = func(xValue);
    document.getElementById('functionOutput').innerHTML = `Result: ${result}`;
  } catch (error) {
    document.getElementById('functionOutput').innerHTML = "Error in function.";
  }
}

// Matrix operations (just a placeholder for now)
function matrixOperation(operation) {
  const A = document.getElementById('matrixInputA').value;
  const B = document.getElementById('matrixInputB').value;
  alert(`Operation: ${operation} for matrices A: ${A}, B: ${B}`);
}

