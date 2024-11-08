// Write a function that calculates the total price of an order and prints it on the console.
// The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. 
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.

function calcTotalPrice(product, quantity) {
    let totalPrice = 0;
    switch (product) {
        case 'coffee':
            totalPrice = 1.50 * quantity;
            break;
        case 'water':
            totalPrice = quantity;
            break;
        case 'coke':
            totalPrice = 1.40 * quantity;
            break;
        case 'snacks':
            totalPrice = 2 * quantity;
            break;
    }
    console.log(totalPrice.toFixed(2));
}

calcTotalPrice("water", 5) // 5.00
calcTotalPrice("coffee", 2) // 3.00
