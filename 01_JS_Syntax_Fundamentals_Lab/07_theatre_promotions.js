// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".

function ticketPrice(typeOfDay, age) {
    let price;
    switch (typeOfDay) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                price = 12;
            } else if (18 < age && age <= 64) {
                price = 18;
            } else if (64 < age && age <= 122) {
                price = 12;
            }
            break;
        case 'Weekend':
            if (0 <= age && age <= 18) {
                price = 15;
            } else if (18 < age && age <= 64) {
                price = 20;
            } else if (64 < age && age <= 122) {
                price = 15;
            }
            break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                price = 5;
            } else if (18 < age && age <= 64) {
                price = 12;
            } else if (64 < age && age <= 122) {
                price = 10;
            }
            break;
    }
    if (price) {
        console.log(`${price}$`);
    }
    else {
        console.log('Error!');
    }
}

ticketPrice('Weekday', 122);
ticketPrice('Weekday', 42);
ticketPrice('Holiday', -12);
ticketPrice('Holiday', 15);