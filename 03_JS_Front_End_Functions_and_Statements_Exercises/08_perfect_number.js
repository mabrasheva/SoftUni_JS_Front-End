// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

function perfectNumber(number) {
    let sum = 0;
    let divisor = 1;

    while (sum < number) {
        if (number % divisor === 0) {
            sum += divisor;
        }
        divisor += 1;
    }

    if (sum === number) {
        console.log('We have a perfect number!');
        return;
    } else if (sum > number) {
        console.log('It\'s not so perfect.');
        return;
    }

}


perfectNumber(6);       // We have a perfect number!
perfectNumber(28);      // We have a perfect number!
perfectNumber(12); // It's not so perfect.
perfectNumber(1236498); // It's not so perfect.
