// You will receive an array with strings in the form of JSON's.
// You have to parse these strings and combine them into one object.
// Every string from the array will hold terms and a description.
// If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

function makeDictionary(input) {
    let dictionary = {};

    for (let element of input) {
        element = JSON.parse(element);
        let term = Object.keys(element)[0];
        let description = Object.values(element)[0]
        dictionary[term] = description;
    }  

    const sortedDictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);
