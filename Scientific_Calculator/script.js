function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById('result').value;

    // Replace 'π' with the numerical value of Math.PI
    expression = expression.replace(/π/g, Math.PI);

    try {
        let result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}