// Write a function, which will be given a single number. Your task is to find the sum of its digits.

function sumDigits(number){
    let sum = 0;
    for (digit of number.toString()){
        sum += parseInt(digit);
    }
    console.log(sum);
}

sumDigits(245678); // 32
sumDigits(97561); // 28
sumDigits(543); // 12
