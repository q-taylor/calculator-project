
// add event listener for each element in 'btn' class and run pressedBtn function on click
const btn = document.querySelectorAll('.btn')
btn.forEach(btn => btn.addEventListener('click', pressedBtn));

const displayTxt = document.getElementById('displayTxt');

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
    console.log(btnTxt);
    console.log(displayTxt.textContent);
    if (btnTxt == '=') {
            calculate(createArray(displayTxt.textContent)); //gets current textContent of display
    } else if (btnTxt == 'backspace') {  //backspace button removes last character of string in displayTxt
        displayTxt.textContent = displayTxt.textContent.substring(0, (displayTxt.textContent.length - 1));
    }
    
    else {
        populateDisp(btnTxt);
        return btnTxt;
    }
}

//put input on display or clear display if clear button pressed
function populateDisp (input) {
        if (input == 'CLEAR') {
            displayTxt.textContent = '';
        } else if (input == '+' || input == '-' || input == 'x' || input == '/') {
            displayTxt.textContent += ` ${input} `;
        } else {
        displayTxt.textContent += input;
        }
}

//add input to createArray split on spaces and return array
function createArray(input) {
    const array = input.split(' ');     //split string on spaces and create array of numbers and operators
    return array;
}

//compute operators and splice array
function calculate(array) {
    array.forEach((element, index) => {  //iterate through array
        if (isNaN(+element)) {      //check if element is NaN, if it is NaN then it must be an operator
                const answer = operate(element, array[index-1], array[index+1]);  //when operator is found run it on the previous and next elements
                console.log({answer});
                console.log(array);
                array.splice(0, 3, answer.toString());  //remove first three elements that were just operated and add string answer as first element
                console.log(array);
                calculate(array);  //callback calculate to start at beginning of array
            } 
    });
}


// get which button is pressed and return number
// add number to array
// make string from array, remove commas