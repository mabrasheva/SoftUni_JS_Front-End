// Write a function that calculates how much money you need to buy fruit. 
// You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.

function fruit(typeOfFruit, weightInGrams, pricePerKg) {
    const weightInKg = weightInGrams / 1000;
    const totalPrice = weightInKg * pricePerKg;

    console.log(`I need \$${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80); // I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35); // I need $3.67 to buy 1.56 kilograms apple.
