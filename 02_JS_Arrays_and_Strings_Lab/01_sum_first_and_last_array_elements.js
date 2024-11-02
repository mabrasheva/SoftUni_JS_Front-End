// Write a function that receives an array of numbers and prints the sum of the first and last element in that array.

function sumFirstAndLast(numbers) {
    const first = numbers[0];
    const last = numbers[numbers.length - 1];
    console.log(first + last);
}

sumFirstAndLast([20, 30, 40]); //	60
sumFirstAndLast([10, 17, 22, 33]); //	43
sumFirstAndLast([11, 58, 69]); //	80
