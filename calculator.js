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
    if (pressedBtn.target.id != 'buttons' && pressedBtn.target.id != 'nmb') {
        const btnTxt = pressedBtn.target.textContent;
        console.log(btnTxt);
        if (btnTxt == 'CLEAR') {
            displayTxt.textContent = '';
        } else {
        const displayTxt = document.getElementById('displayTxt');
        displayTxt.textContent += btnTxt;
        
        //displayTxt.scrollWidth > displayTxt.clientWidth ? displayTxt.style.fontSize = '70%' : displayTxt.style.fontSize = '100%';
        }
    } else {
        return false; 
    } 
}

// add event listener for each button and run populateDisp function on click
const buttons = document.querySelectorAll('#buttons')
console.log({buttons});
buttons.forEach(pressedBtn => {
    console.log({pressedBtn});
    const txt = pressedBtn.addEventListener('click', populateDisp);
    return txt;
});

// scale font size

function scaleFontSize (element) {
    const txt = document.getElementById(element)
}