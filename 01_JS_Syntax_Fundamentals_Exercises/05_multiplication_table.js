function multiplicationTable(number) {
    for (let currentNumber = 1; currentNumber <= 10; currentNumber += 1) {
        console.log(`${number} X ${currentNumber} = ${number * currentNumber}`);
    }
}

multiplicationTable(5);
multiplicationTable(2);