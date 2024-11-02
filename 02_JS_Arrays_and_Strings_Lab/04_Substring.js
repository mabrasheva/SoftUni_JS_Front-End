// Write a function that receives a string and two numbers. 
// The numbers will be a starting index and count of elements to substring. Print the result.

function substring(text, startIndex, count) {
    console.log(text.slice(startIndex, startIndex + count));
};

substring('ASentence', 1, 8);   //	Sentence
substring('SkipWord', 4, 7);    //	Word

