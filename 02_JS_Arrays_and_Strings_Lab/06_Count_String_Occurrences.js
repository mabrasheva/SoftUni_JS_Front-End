// Write a function that receives a text and a single word that you need to search.
// Print the number of all occurrences of this word in the text.

function countStringOccurrences(text, word) {
    const pattern = new RegExp(`\\b${word}\\b`, 'g')
    const matches = text.match(pattern);

    const count = matches ? matches.length : 0;
    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');   // 2
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni'); //1
