class Calculator {
    constructor(previousOperandTextContent, currentOperandTextContent) {
        this.previousOperandTextContent = previousOperandTextContent;
        this.currentOperandTextContent = currentOperandTextContent;
        this.reset();
    }

    clear() {


    }

    reset() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }


    appendNumber(number) {

        if (number === '.' && this.currentOperand.includes('.')) return;

        this.currentOperand += number;

    }


    chooseOperation(operation) {
        if (this.currentOperand === '')return;
        
        this.operation = operation;
        this.previousOperand = this.currentOperand + ' ' + operation;
        this.currentOperand = '';



    }


    compute() {

    }

    updateDisplay() {
        this.currentOperandTextContent.textContent = this.currentOperand;
        this.previousOperandTextContent.textContent = this.previousOperand;
    }
}



const numbers = document.querySelector('.numbers');
for (let i = 0; i < 9; i++) {
    const number = document.createElement('div');
    number.textContent = (i + 1);
    number.setAttribute("data-number", i);
    number.classList.add('number');
    numbers.appendChild(number);
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const inverseButton = document.querySelector('[data-inverse]');
const modButton = document.querySelector('[data-mod]');
const resetButton = document.querySelector('[data-reset]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');



const previousOperandTextContent = document.querySelector('[data-previous-operand]');
const currentOperandTextContent = document.querySelector('[data-current-operand]');





const calculator = new Calculator(previousOperandTextContent, currentOperandTextContent);


numberButtons.forEach(e => {
    e.addEventListener('click', () => {
        calculator.appendNumber(e.textContent);
        calculator.updateDisplay();
    })
});


operationButtons.forEach(e => {
    e.addEventListener('click', () => {
        calculator.chooseOperation(e.textContent);
        calculator.updateDisplay();
    })
})


