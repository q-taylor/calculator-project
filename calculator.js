
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
            return round ((add(a, b)), 2);
        case '-':
            return round ((subtract(a, b)), 2);
        case 'x':
        case '*':
            return round ((multiply(a, b)), 2);
        case '/':
            return round ((divide(a, b)), 2);
    }
}

function round(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    var n = (num * p) * (1 + Number.EPSILON);
    return Math.round(n) / p;
}

//get which button is pressed
function pressedBtn (input) {
    const btnTxt = input.target.textContent;
    console.log({btnTxt});
    console.log(displayTxt.textContent);
    if (btnTxt == '=') {`""`
        if (displayTxt.textContent.includes('=')) { 
            // if = is already present in displayTxt then only get text after last = sign
            calculate(createArray(displayTxt.textContent.slice(displayTxt.textContent.lastIndexOf('=')+1)));
        } else {
        //gets current textContent of display after the last equals sign and sends to calculate function
        calculate(createArray(displayTxt.textContent));
        }
    } else if (btnTxt == 'backspace') {  
        populateDisp(btnTxt);
    } else if (btnTxt == '+' || btnTxt == '-' || btnTxt == 'x' || btnTxt == '/') {
        populateDisp(` ${btnTxt} `);
    } else if (btnTxt == 'CLEAR') {
        populateDisp('');
    } else if (btnTxt == '.') {
        //if final number inlcudes a decimal already then don't populate
        displayTxt.textContent.slice(displayTxt.textContent.lastIndexOf(' ')).includes('.') ? displayTxt.textContent = displayTxt.textContent :
        populateDisp(btnTxt);
    }else {
            populateDisp(btnTxt);
            return btnTxt;
    }
}

//add input to display, delete last entry if backspace pressed, or clear display for clear
function populateDisp (input) {
    if (input == '') {
        displayTxt.textContent = '';
    } else if (input == 'backspace') {  //backspace button removes last entry of string in displayTxt
        displayTxt.textContent = displayTxt.textContent.substring(0, (displayTxt.textContent.endsWith(' ')) ?
        (displayTxt.textContent.length - 3) : (displayTxt.textContent.length - 1)); 
            //num of characteres to remove depends on if the last char is a space
            // since there are spaces around the operators
    } else if (input == '=') {
        displayTxt.textContent = ``
    } else if (typeof input == 'object') {  //check if array is being asked to be shown
        //create string from array, replace commas with spaces, add to display after equals sign
        if (input[0] == 'NaN') {
            displayTxt.textContent = 'ERROR: Not a Number';
        } else if (input[0] == Infinity) {
            displayTxt.textContent = 'Are you trying to break the universe?!';
        } else {
            displayTxt.textContent += `
             = ${input.toString().replace(/,/g, ' ')}`;
        }
    } else {
        displayTxt.textContent += input;
    }
    //scroll to bottom of displayTxt
    displayTxt.scroll(0, displayTxt.scrollHeight);
}

//add input to createArray, split on spaces and return array
function createArray(string) {
    const array = string.trimStart().split(/\s+/);  //split string on spaces and create array of numbers and operators
    return array;
}

//compute operators and splice array
function calculate(array) {
    console.log(`array starts with: ${array[0]}`);
    //check if array starts with '='
    if (array[0] == ' ') {
        displayTxt.textContent = 'ERROR';
    } else {
        array.forEach((element, index, array) => {  //iterate through array
            //check if element is NaN, if it is NaN then it must be an operator
            //make sure the element is not = to prevent errors
            if ((isNaN(+element)) && element != '=') {      
                console.log(`Array: ${array}`);
                console.log({index});
                console.log({element});
                console.log(array[(index-1)]);
                console.log(array[index+1]);
                //when operator is found run it on the previous and next elements
                const answer = operate(element, array[index-1], array[index+1]);
                //remove first three elements that were just operated and add string answer as first element
                array.splice(0, 3, answer.toString());
                // send array to populateDisp to show it
                populateDisp(array);
                console.log({answer});
                
                
                calculate(array);  //callback calculate to start at beginning of array                
                }
        });
    }
}

