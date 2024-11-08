// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.
// 		Friday	Saturday	Sunday
// Students	8.45	9.80	10.46
// Business	10.90	15.60	16
// Regular	15	20	22.50
// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.

function calculatePrice(peopleNumber, groupType, weekDay) {
	const isStudentsGroup = groupType === "Students";
	const isBusinessGroup = groupType === "Business";
	const isRegularGroup = groupType === "Regular";

	const isFriday = weekDay === "Friday";
	const isSaturday = weekDay === "Saturday";
	const isSunday = weekDay === "Sunday";

	pricePerPerson = 0;

	if (isStudentsGroup) {
		if (isFriday) {
			pricePerPerson = 8.45;
		} else if (isSaturday) {
			pricePerPerson = 9.80;
		} else if (isSunday) {
			pricePerPerson = 10.46;
		}
	} else if (isBusinessGroup) {
		if (isFriday) {
			pricePerPerson = 10.90;
		} else if (isSaturday) {
			pricePerPerson = 15.60;
		} else if (isSunday) {
			pricePerPerson = 16;
		}
	} else if (isRegularGroup) {
		if (isFriday) {
			pricePerPerson = 15;
		} else if (isSaturday) {
			pricePerPerson = 20;
		} else if (isSunday) {
			pricePerPerson = 22.50;
		}
	}

	totalPrice = pricePerPerson * peopleNumber

	// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
	// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
	// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%

	if (isStudentsGroup && peopleNumber >= 30) {
		totalPrice *= 0.85;
	} else if (isBusinessGroup && peopleNumber >= 100) {
		totalPrice -= 10 * pricePerPerson;
	} else if (isRegularGroup && (peopleNumber >= 10 && peopleNumber <= 20)) {
		totalPrice *= 0.95;
	}

	console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

calculatePrice(30, "Students", "Sunday") //Total price: 266.73
calculatePrice(40, "Regular", "Saturday") //Total price: 800.00
