// The input will be a single string.
// Find all special words starting with #. 
// If the found special word does not consist only of letters, then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) on a new line.


function hashtagWords(text) {
    const textArray = text.split(' ');
    let hashtagWords = [];
    const pattern = /^#([A-Za-z]+)$/

    textArray.forEach(element => {
        if (element.match(pattern)) {
            let matchedWord = element.match(pattern)[1];
            hashtagWords.push(matchedWord);
        }
    });
    console.log(hashtagWords.join('\n'));
}

hashtagWords('Nowadays everyone uses # to tag a #special word in #socialMedia'); //	special socialMedia
// hashtagWords('Nowadays everyone uses # to tag a #special word in #socialMedia1'); //	special socialMedia
// hashtagWords('Nowadays everyone uses # to tag a #special word in #socialMedia$%D.'); //	special socialMedia
// hashtagWords('The symbol # is known #variously in English-speaking #regions as the #number sign'); //variously  regions number
