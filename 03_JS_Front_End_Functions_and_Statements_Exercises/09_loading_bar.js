// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.

function loadingBar(number) {
    let loadingBarProgress = '[' +
        '%'.repeat(number / 10).
            padEnd(10, '.')
        + ']';

    if (number < 100) {
        console.log(`${number}% ${loadingBarProgress}\nStill loading...`);
    } else if (number === 100) {
        console.log(`${number}% Complete!\n${loadingBarProgress}`);
    }
}

loadingBar(30); // 30% [%%%.......] // Still loading...
loadingBar(33); // 30% [%%%.......] // Still loading...
loadingBar(100); // 100% Complete! // [%%%%%%%%%%]
