// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.

function addAndSubtract(numOne, numTwo, numThree) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const result = subtract(sum(numOne, numTwo), numThree);
    console.log(result);
}

addAndSubtract(23, 6, 10); // 19
addAndSubtract(1, 17, 30); // -12
addAndSubtract(42, 58, 100); // 0
