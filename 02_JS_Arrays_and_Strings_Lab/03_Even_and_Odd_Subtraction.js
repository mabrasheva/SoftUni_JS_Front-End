// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function solve(array) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let element of array) {
        if (element % 2 === 0) {
            sumEven += element;
        } else {
            sumOdd += element;
        }
    }
    console.log(sumEven - sumOdd);
}


solve([1, 2, 3, 4, 5, 6]);   // 3
solve([3, 5, 7, 9]);       // -24
solve([2, 4, 6, 8, 10]);    // 30
