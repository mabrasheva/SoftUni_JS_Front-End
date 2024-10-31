// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumbers(number){
    const numberAsString = number.toString();
    const firstChar = numberAsString[0];
    let result = true;
    let sum = 0;
    for (const char of numberAsString){
        sum += parseInt(char);
        if (char !== firstChar){
            result = false;
        }
    }
    console.log(result);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);