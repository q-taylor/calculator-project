
// add event listener for each element in 'btn' class and run pressedBtn function on click
const btn = document.querySelectorAll('.btn')
console.log({btn});
btn.forEach(btn => {
    return btn.addEventListener('click', pressedBtn);
});


//operator button functions
function add(a, b) {
    return +a + +b;
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
            computeArray(document.getElementById('displayTxt').textContent); //gets current textContent of display
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
function computeArray(input) {
    const array = input.split(' ');     //split string on spaces and create array of numbers and operators
    array.forEach((element, index) => {  //iterate through each array item
        if (isNaN(+element)) {      //check if element is a number, if it is NaN then it must be an operator
            console.log(operate(element, array[index-1], array[index+1]));  //when operator is found run it on the previous and next elements
        }
    });
}


// get which button is pressed and return number
// add number to array
// make string from array, remove commas