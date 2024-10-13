// Write a JS function that takes two numbers and a string as input.
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.

function mathOpeations(firstNumber, secondNumber, opeation) {
    switch (opeation) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
        case '%':
            console.log(firstNumber % secondNumber);
            break;
        case '**':
            console.log(firstNumber ** secondNumber);
            break;
        default:
            console.log('Error!');
            break;
    }
}

mathOpeations(5, 6, '+');
mathOpeations(3, 5.5, '*');