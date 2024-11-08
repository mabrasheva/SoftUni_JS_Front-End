// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  
// `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function largestNumber(firstNumber, secondNumber, thirdNumber) {
    let maxNumber;
    if (firstNumber >= secondNumber) {
        if (firstNumber >= thirdNumber) {
            maxNumber = firstNumber;
        }
        else {
            maxNumber = thirdNumber;
        }
    } else {
        if (secondNumber >= thirdNumber) {
            maxNumber = secondNumber;
        } else {
            maxNumber = thirdNumber;
        }
    }
    console.log(`The largest number is ${maxNumber}.`);

}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
