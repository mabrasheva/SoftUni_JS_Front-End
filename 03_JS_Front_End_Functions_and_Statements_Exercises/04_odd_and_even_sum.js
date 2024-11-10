// You will receive a single number.
// You have to write a function, that returns the sum of all even and all odd digits from that number. 

function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    for (digit of number.toString()) {
        Number(digit) % 2 === 0 ? evenSum += Number(digit) : oddSum += Number(digit);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435); // Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234); // Odd sum = 54, Even sum = 22
