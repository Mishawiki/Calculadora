document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstInput = '';
    let secondInput = '';
    let result = '';

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', function() {
            currentInput += button.innerText;
            display.value = currentInput;
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', function() {
            if (operator !== '' && currentInput !== '') {
                firstInput = operate(firstInput, currentInput, operator);
                currentInput = '';
                display.value = firstInput;
            } else if (currentInput !== '') {
                firstInput = currentInput;
                currentInput = '';
            }
            operator = button.innerText;
        });
    });

    document.querySelector('.equal').addEventListener('click', function() {
        if (operator !== '' && currentInput !== '') {
            result = operate(firstInput, currentInput, operator);
            display.value = result;
            currentInput = '';
            firstInput = result;
            operator = '';
        }
    });

    document.querySelector('.clear').addEventListener('click', function() {
        currentInput = '';
        operator = '';
        firstInput = '';
        secondInput = '';
        result = '';
        display.value = '';
    });

    function operate(num1, num2, op) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return 'Error';
                }
                return num1 / num2;
            default:
                return 'Error';
        }
    }
});


