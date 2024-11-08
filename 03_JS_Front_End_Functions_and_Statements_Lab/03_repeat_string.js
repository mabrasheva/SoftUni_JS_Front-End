// Write a function that receives a string and a repeat count n. 
// The function should return a new string (the old one repeated n times).

function repeatString(string, count) {
    return string.repeat(count);
}

repeatString("abc", 3);    // abcabcabc
repeatString("String", 2); // StringString
