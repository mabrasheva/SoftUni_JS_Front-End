// Function that displays numbers from given start to given end and their sum. 
// The input comes as two number parameters.

function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let output = "";
    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber += 1) {
        output += `${currentNumber} `;
        sum += currentNumber;
    }

    console.log(output.trim());
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
