// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.

function pascalCaseSplit(initialString) {
    let newString = [];
    const pattern = /[A-Z]/;
    for (const element of initialString) {
        if (element.match(pattern) && newString.length) {
            newString.push(`, ${element}`);
        } else {
            newString.push(element);
        }
    }
    console.log(newString.join(''));
}

pascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan'); // Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can