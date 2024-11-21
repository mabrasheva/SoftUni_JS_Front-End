// Function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

function printWordsOccuringOddTimes(inputString) {
    const wordsArray = inputString.split(' ').map(item => item.toLowerCase());
    let searchedWords = [];
    for (const word of wordsArray) {
        let count = wordsArray.filter(item => item === word).length;
        if (count % 2 !== 0 && !searchedWords.includes(word)) {
            searchedWords.push(word);
        }
    }
    console.log(searchedWords.join(' '));
}

printWordsOccuringOddTimes('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
printWordsOccuringOddTimes('Cake IS SWEET is Soft CAKE sweet Food');
