// Write a function that receives two integer numbers. Calculate the factorial of each number.
// Divide the first result by the second and print the division formatted to the second decimal point.

function factorialDivision(firstNumber, secondNumber) {

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const result = factorial(firstNumber) / factorial(secondNumber);
    console.log(result.toFixed(2));
}

factorialDivision(5, 2); // 60.00
factorialDivision(6, 2); // 360.00
