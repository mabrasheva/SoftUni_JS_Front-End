// Function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number. 
// Replace duplicate names.

function phoneBook(namesArray) {
    let namesObject = {};
    namesArray.forEach(element => {
        let [personName, phone] = element.split(' ');
        namesObject[personName] = phone;
    });

    for (const name in namesObject) {
        console.log(`${name} -> ${namesObject[name]}`);
    }
}

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);
