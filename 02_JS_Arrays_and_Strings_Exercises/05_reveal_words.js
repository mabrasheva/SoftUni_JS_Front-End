// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function revealWords(text, template) {
    const keyWords = text.split(', ');
    const templateArray = template.split(' ');

    keyWords.forEach(keyWord => {
        let keyWordLength = keyWord.length;
        let searchedTemplate = '*'.repeat(keyWordLength);
        for (let index = 0; index < templateArray.length; index++) {
            if (templateArray[index] === searchedTemplate) {
                templateArray[index] = keyWord;
            }
        }
    });
    const newTemplate = templateArray.join(' ');
    console.log(newTemplate);
}

revealWords('great', 'softuni is ***** place for learning new programming languages'); // softuni is great place for learning new programming languages

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'); // softuni is great place for learning new programming languages