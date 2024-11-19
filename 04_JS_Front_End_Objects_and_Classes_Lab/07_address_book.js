// Function that stores information about a person’s name and his address. 
// The input comes as an array of strings. 
// Each string contains the name and the address separated by a colon. 
// If you receive the same name twice just replace the address. 
// In the end, print the full list, sorted alphabetically by the person’s name.

function addressBook(inputArray) {
    let addressBookResult = {};
    for (const element of inputArray) {
        let [personName, personAddress] = element.split(':');
        addressBookResult[personName] = personAddress;
    }
    const sortedKeys = Object.keys(addressBookResult).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (const key of sortedKeys) {
        console.log(`${key} -> ${addressBookResult[key]}`);
    }
}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);
