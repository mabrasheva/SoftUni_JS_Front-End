// Write a function that receives a text as a first parameter and a single word as a second. 
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function censoredWords(text, word) {
    const result = text.replaceAll(word, '*'.repeat(word.length))
    console.log(result);
}

censoredWords('A small small sentence with some words', 'small'); //  A ***** sentence with some words
censoredWords('A small sentence with some words', 'A'); //  A ***** sentence with some words
censoredWords('Find the hidden word', 'hidden');            //  Find the ****** word
