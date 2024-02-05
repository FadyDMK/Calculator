class Calculator {
    constructor(previousOperandTextContent, currentOperandTextContent) {
        this.previousOperandTextContent = previousOperandTextContent;
        this.currentOperandTextContent = currentOperandTextContent;
        this.reset();
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

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
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + ' ' + operation;
        this.currentOperand = '';



    }

    inverse(){
        if (this.currentOperand === '') return;
        this.currentOperand = (- parseFloat(this.currentOperand)).toString();
    }

    mod(){
        if (this.currentOperand === '') return;
        this.currentOperand = (parseFloat(this.currentOperand)/100).toString();

    }



    compute() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '/':
                result = prev / curr;
                if (curr === 0){
                    alert('💥 *explosion* 💥');
                    this.reset();
                    return
                }
                break
            case 'x':
                result = prev * curr;
                break
            default:
                return
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextContent.textContent = this.currentOperand;
        this.previousOperandTextContent.textContent = this.previousOperand;
    }
}



const numbers = document.querySelector('.numbers');
for (let i = 0; i < 9; i++) {
    const number = document.createElement('button');
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


modButton.addEventListener('click', () => {
    calculator.mod();
    calculator.updateDisplay();
})


inverseButton.addEventListener('click', () => {
    calculator.inverse();
    calculator.updateDisplay();
})



clearButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

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
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});



resetButton.addEventListener('click', () => {
    calculator.reset();
    calculator.updateDisplay();
});



