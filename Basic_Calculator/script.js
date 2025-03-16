const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function handleButtonClick(value) {
    if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = null;
    } else if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
        if (operator && previousInput && currentInput) {
            currentInput = calculate(previousInput, currentInput, operator);
            previousInput = '';
            operator = null;
        }
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '' && previousInput !== '') {
            operator = value;
        } else if (currentInput !== '') {
            if (operator && previousInput) {
                previousInput = calculate(previousInput, currentInput, operator);
            } else {
                previousInput = currentInput;
            }
            operator = value;
            currentInput = '';
        }
    } else {
        if (value === '.' && currentInput.includes('.')) return; 
        currentInput += value;
    }

    updateDisplay();
}

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1))return num2;
    if (isNaN(num2)) return num1;

    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
        default:
            return num2.toString();
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.getAttribute('data-value'));
    });
});