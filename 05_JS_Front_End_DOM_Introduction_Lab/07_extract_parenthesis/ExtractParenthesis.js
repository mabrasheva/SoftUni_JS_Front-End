//JS function that extracts all parenthesized text from a target paragraph by given element ID. 
// The result is a string, joined by "; " (semicolon, space).

function extract(content) {
    let contentElement = document.getElementById('content').textContent;
    const pattern = /\(([^()]*)\)/g;
    return Array.from(contentElement.matchAll(pattern))
        .map(element => element[1])
        .join(';');
}
