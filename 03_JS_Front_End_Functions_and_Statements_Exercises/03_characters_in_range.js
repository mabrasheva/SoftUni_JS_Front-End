// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
// Keep in mind that the second character code might be before the first one inside the ASCII table.

function charactersInRange(char1, char2) {
    let sequence = [];
    let code1 = char1.codePointAt();
    let code2 = char2.codePointAt();
    // console.log(code1);
    // console.log(code2);
    // console.log(String.fromCharCode(code1));
    // console.log(String.fromCharCode(code2));

    if (code1 < code2) {
        for (let index = code1 + 1; index < code2; index++) {
            sequence.push(String.fromCharCode(index));
        }
    } else {
        for (let index = code2 + 1; index < code1; index++) {
            sequence.push(String.fromCharCode(index));
        }
    }

    console.log(sequence.join(' '));
}

charactersInRange('a', 'd') // b c
charactersInRange('#', ':') // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
charactersInRange('C', '#') // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B

