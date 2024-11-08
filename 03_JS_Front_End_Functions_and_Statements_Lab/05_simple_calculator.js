// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. 
// Operator can be 'multiply', 'divide', 'add' or 'subtract'. 
// Try to solve this task using arrow functions.

function calculator(numOne, numTwo, operator) {
    let result = 0;
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const divide = (a, b) => a / b;
    const subtract = (a, b) => a - b;
    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }
    console.log(result);
}

calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');
