// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.

function sortingNumbers(arrayNumbers) {
    let sortedNumbers = arrayNumbers.sort((a, b) => a - b);
    result = [];
    while (sortedNumbers.length) {
        result.push(sortedNumbers.shift());
        if (sortedNumbers.length) {
            result.push(sortedNumbers.pop());
        }
    };
    // console.log(result);
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]) // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
