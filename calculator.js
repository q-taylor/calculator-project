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
// get which button is pressed and return number using event delegation
// add number to array
// make string from array, remove commas

function populateDisp (pressedBtn) {
     console.log(pressedBtn.target)
     const btnTxt = pressedBtn.target.textContent;
     console.log(btnTxt);
     const displayTxt = document.getElementById('displayTxt');
     displayTxt.textContent += btnTxt;

}

// add event listener for each button and run populateDisp function on click
const buttons = document.querySelectorAll('#buttons')
buttons.forEach(pressedBtn => pressedBtn.addEventListener('click', populateDisp));

