// Write a program that receives 6 parameters which are a number and a list of five operations.
// Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one.
// Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. 
// The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.

function cookingByNumbers(number, ...operations) {
    let currentNumber = Number(number);
    for (const operation of operations) {
        if (operation === "chop") {
            currentNumber /= 2;
        } else if (operation === "dice") {
            currentNumber = Math.sqrt(currentNumber);
        } else if (operation === "spice") {
            currentNumber += 1;
        } else if (operation === "bake") {
            currentNumber *= 3;
        } else if (operation === "fillet") {
            currentNumber *= 0.8;
        }
        // console.log(Number.isInteger(currentNumber) ? currentNumber : parseFloat(currentNumber.toFixed(1)));
        console.log(currentNumber);
    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');