// Write a program, which receives a number n and an array of elements. 
// Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reversedArray(count, array) {
    let result = array.slice(0, count).reverse();
    console.log(result.join(' '));
}

reversedArray(3, [10, 20, 30, 40, 50]); // 30 20 10
reversedArray(4, [-1, 20, 99, 5]);      // 5 99 20 -1
reversedArray(2, [66, 43, 75, 89, 47]); // 43 66
