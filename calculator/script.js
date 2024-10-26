let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    document.getElementById('display').value = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

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
            result = prev / curr;
            break;
        default:
            return;
    }
    currentNumber = result;
    operator = '';
    previousNumber = '';
    document.getElementById('display').value = result;
}

function clearDisplay() {
    currentNumber = '';
    operator = '';
    previousNumber = '';
    document.getElementById('display').value = '';
}
