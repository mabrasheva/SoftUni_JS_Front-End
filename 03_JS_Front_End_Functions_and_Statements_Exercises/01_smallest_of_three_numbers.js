// Write a function that receives three integers and prints the smallest number.

function smallestNumber(numOne, numTwo, numThree) {
    const smallest = (a, b) => a < b ? a : b;
    const result = smallest(smallest(numOne, numTwo), numThree);
    console.log(result);
}

smallestNumber(2, 5, 3);
smallestNumber(2, 2, 2);
