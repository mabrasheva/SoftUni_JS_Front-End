// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.

function grade(number) {
    if (number < 3) {
        console.log('Fail (2)');
    } else if (number < 3.50) {
        console.log(`Poor (${number.toFixed(2)})`);
    } else if (number < 4.50) {
        console.log(`Good (${number.toFixed(2)})`);
    } else if (number < 5.50) {
        console.log(`Very good (${number.toFixed(2)})`);
    } else if (number >= 5.50) {
        console.log(`Excellent (${number.toFixed(2)})`);
    }
}

grade(2);
grade(3.55);
grade(4.60);
grade(5.51);
