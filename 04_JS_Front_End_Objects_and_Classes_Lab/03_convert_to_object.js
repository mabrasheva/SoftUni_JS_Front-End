// Function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

function covertStringToObject(inputString) {
    const newObject = JSON.parse(inputString);
    for (const key in newObject) {
        console.log(`${key}: ${newObject[key]}`);
    }
}

covertStringToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
