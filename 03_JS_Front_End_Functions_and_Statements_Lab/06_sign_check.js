// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.

// Hints
// •	Consider how the sign of each of the three input parameters will affect their product.
// •	Check all the different combinations for the three numbers.

function checkResult(numOne, numTwo, numThree) {
    const multiplication = (a, b) => a * b;
    const resultIsPositive = multiplication(multiplication(numOne, numTwo), numThree) >= 0;

    if (resultIsPositive) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

checkResult(5, 12, -15);
checkResult(-6, -12, 14);
checkResult(-1, -2, -3);
checkResult(-5, 1, 1);
