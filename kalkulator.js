const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        appendOperator(value);
    } else {
        appendNumber(value);
    }
}

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return; // Prevent multiple decimal points
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult(); // Calculate previous operation if any
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.value = '';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || operator === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}