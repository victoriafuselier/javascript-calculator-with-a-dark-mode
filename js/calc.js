const clearBtn = document.querySelector('#clear-btn');
const equalBtn = document.querySelector('#equal-btn');
const equation = document.querySelector('#equation');
const resultDisplay = document.querySelector('#result');
const numberBtns = document.getElementsByClassName('number-btn');
const operatorBtns = document.getElementsByClassName('operator-btn');

for (let i=0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        appendToDisplay(this.textContent);
    });
}

for (let i=0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', function() {
        appendToDisplay(this.textContent);
    });
}

function appendToDisplay(buttonText) {
    equation.value += buttonText;
}

function clearDisplay() {
    equation.value = '';
    resultDisplay.value = '';
}

function calculate() {
    const properEquation = equation.value.replace(/x/g, '*');
    try {
        const result = eval(properEquation);
        if (isNaN(result)) {
            resultDisplay.value = 'Error';
        } else {
            resultDisplay.value = result;
        }
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

clearBtn.addEventListener('click', ()=> {
    clearDisplay();
});

equalBtn.addEventListener('click', ()=> {
    calculate();
});

