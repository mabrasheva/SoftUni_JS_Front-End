// The input will be given as two separated strings (a word as a first parameter and a text as a second).
// Write a function that checks given text for containing a given word.
// The comparison should be case insensitive. 
// Once you find a match, print the word and stop the program. 
// If you don't find the word print: "{word} not found!"

function solve(keyWord, text) {
    const textArray = text.split(' ');
    const pattern = new RegExp(`^${keyWord}$`, 'ig');
    for (element of textArray) {
        if (element.match(pattern)) {
            console.log(keyWord);
            return;
        }
    }
    console.log(`${keyWord} not found!`);
}


function solve2(keyWord, text) {
    const textArray = text.split(' ');
    for (element of textArray) {
        if (element.toLowerCase() === keyWord.toLowerCase()) {
            console.log(keyWord);
            return;
        }
    }
    console.log(`${keyWord} not found!`)
}


solve('javascript', 'JavaScriptqw is the best programming language'); // javascript
solve('Javascript', 'JavaScript is the best programming language'); // javascript
solve('python', 'JavaScript is the best programming language'); // python not found!

solve2('javascript', 'JavaScriptqw is the best programming language'); // javascript
solve2('Javascript', 'JavaScript is the best programming language'); // javascript
solve2('python', 'JavaScript is the best programming language'); // python not found!

