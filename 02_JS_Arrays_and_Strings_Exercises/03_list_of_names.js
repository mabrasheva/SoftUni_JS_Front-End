// You will receive an array of names. 
// Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function sortNames(namesArray) {
    const sorted = namesArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

sortNames(["John", "Bob", "Christina", "Ema", "Emma", "ema"])
/*
1.Bob
2.Christina
3.Ema
4.John
*/