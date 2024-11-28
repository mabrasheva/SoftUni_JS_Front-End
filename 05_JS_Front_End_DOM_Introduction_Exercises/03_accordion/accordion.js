function toggle() {
    let buttonElement = document.querySelector('span.button');
    let extraContent = document.getElementById('extra');
    if (buttonElement.textContent === 'More') {
        extraContent.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraContent.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}
