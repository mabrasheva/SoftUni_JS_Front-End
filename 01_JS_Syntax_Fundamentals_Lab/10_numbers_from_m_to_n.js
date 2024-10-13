// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.

function numbersRange(startNumber, EndNumber) {
    for (let index = startNumber; index > EndNumber - 1; index--) {
        console.log(index);
    }
}

numbersRange(6, 2);
numbersRange(4, 1);