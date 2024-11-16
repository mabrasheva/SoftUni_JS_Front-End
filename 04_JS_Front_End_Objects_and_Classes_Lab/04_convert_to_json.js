// Function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.

function convertObjectToJson(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor,
    }
    console.log(JSON.stringify(person));
}

convertObjectToJson('George', 'Jones', 'Brown');
