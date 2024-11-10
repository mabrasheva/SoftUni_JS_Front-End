// Write a function that receives a single integer number n and prints nxn matrix with that number.

function nxnMatrix(number) {
    let row = [];
    for (let n = 0; n < number; n++) {
        row.push(number);
    }
    row = row.join(' ');
    const result = (row + '\n').repeat(number).trim();
    console.log(result);
}

nxnMatrix(3);
nxnMatrix(7);
