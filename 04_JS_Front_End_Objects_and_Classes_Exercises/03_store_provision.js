// Input - two arrays. 
// First array - the current stock of the local store. 
// Second array - products ordered for delivery.
// The following information applies to both arrays:
// Every even index hold the name of the product.
// Every odd index hold the quantity of that product. 
// The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.


function storeProvision(current, ordered) {

    function productQuantity(productsArray) {
        let products = {};

        for (let index = 0; index < productsArray.length; index += 2) {
            let product = productsArray[index];
            let quantity = parseInt(productsArray[index + 1]);

            if (products[product]) {
                products[product] += quantity;
            } else {
                products[product] = quantity;
            }
        }

        return products;
    }

    const currentProducts = productQuantity(current);
    const orderedProducts = productQuantity(ordered);

    const totalProducts = currentProducts;
    for (const element in orderedProducts) {
        if (!totalProducts.hasOwnProperty(element)) {
            totalProducts[element] = orderedProducts[element];
        } else {
            totalProducts[element] += orderedProducts[element];
        }
    }

    for (let [key, value] of Object.entries(totalProducts)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
