// Write a function that takes a single argument as input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.
// If the argument type is NOT a number, print the following text on the console:
// `We can not calculate the circle area, because we receive a {type of argument}.`

function circleArea(radius) {
    let result;
    typeOfInput = typeof (radius);
    if (typeOfInput !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    } else {
        result = Math.PI * radius ** 2;
        console.log(result.toFixed(2));
    }
}

circleArea(5);
circleArea('name');
