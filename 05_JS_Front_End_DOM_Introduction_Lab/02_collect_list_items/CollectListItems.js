function extractText() {
    const ulElement = document.getElementById('items');
    const textAreaElement = document.getElementById('result');
    textAreaElement.textContent = ulElement.innerText;
}
