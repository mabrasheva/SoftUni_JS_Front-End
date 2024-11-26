// JS function that changes the color of all even rows when the user clicks a button. 

function colorize() {
    let evenTableTrElements = document.querySelectorAll('table tr:nth-of-type(even)');
    evenTableTrElements = Array.from(evenTableTrElements)
        .forEach(element => {
            element.style.background = 'teal';
        });
}
