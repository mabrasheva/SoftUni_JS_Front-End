// Function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.

function wordsCount(inputArray) {
    let searchedWordsArray = inputArray[0].split(' ');
    let wordsArray = inputArray.slice(1);
    let wordsCountObj = {};

    for (const word of searchedWordsArray) {
        const count = wordsArray.filter(item => item === word).length;
        wordsCountObj[word] = count;
    }

    const sortedWordsCountArray = Object.entries(wordsCountObj).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWordsCountArray) {
        console.log(`${word} - ${count}`);
    }
}

wordsCount([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
