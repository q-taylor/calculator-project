
// add event listener for each element in 'btn' class and run pressedBtn function on click
const btn = document.querySelectorAll('.btn')
console.log({btn});
btn.forEach(btn => {
    return btn.addEventListener('click', pressedBtn);
});


//operator button functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

//get which button is pressed output button text
function pressedBtn (input) {
    const btnTxt = input.target.textContent;
    if (btnTxt == '=') {

    } else {
        populateDisp(btnTxt);
        return btnTxt;
    }
}

//put input on display or clear display if clear button pressed
function populateDisp (input) {
        if (input == 'CLEAR') {
            displayTxt.textContent = '';
        } else if (input == '+' || input == '-' || input == 'x' || input == '/') {
            const displayTxt = document.getElementById('displayTxt');
            displayTxt.textContent += ` ${input} `;
        } else {
        const displayTxt = document.getElementById('displayTxt');
        displayTxt.textContent += input;
        }
}

//add input to computeArray
function arrayAdd(input) {

}


// get which button is pressed and return number
// add number to array
// make string from array, remove commas