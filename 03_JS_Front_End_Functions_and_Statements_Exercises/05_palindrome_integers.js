// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

function isPalindrome(numbersArr) {

    for (let index = 0; index < numbersArr.length; index++) {
        let currentNumber = numbersArr[index];

        let currentNumberIsPalindrome = true;
        let digitsArray = currentNumber.toString().split('');
        for (let index = 0; index < digitsArray.length / 2; index++) {
            let startDigit = digitsArray[0 + index];
            let endDigit = digitsArray[digitsArray.length - 1 - index];
            if (startDigit !== endDigit) {
                currentNumberIsPalindrome = false;
                break
            }
        }
        console.log(currentNumberIsPalindrome);
    }
}

isPalindrome([123, 323, 421, 121]);
isPalindrome([32, 2, 232, 1010]); 
