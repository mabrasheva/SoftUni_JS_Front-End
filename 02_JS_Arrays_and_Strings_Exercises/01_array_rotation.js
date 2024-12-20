// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Print the resulting array elements separated by a single space.

function arrayRotation(array, rotationNumber) {
    let rotatedArray = array;
    count = 0;
    while (count < rotationNumber) {
        firstElement = rotatedArray.shift()
        rotatedArray.push(firstElement)
        count += 1;
    }
    console.log(rotatedArray.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);     // 32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4);          // 32 21 61 1
arrayRotation([2, 4, 15, 31], 5);           // 4 15 31 2
