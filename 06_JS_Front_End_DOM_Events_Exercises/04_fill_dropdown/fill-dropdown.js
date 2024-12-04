document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        const newItemTextElement = document.getElementById('newItemText');
        const newItemValueElement = document.getElementById('newItemValue');

        if (newItemTextElement.value === '' || newItemValueElement.value === '') return;

        const newOptionElement = document.createElement('option');
        newOptionElement.textContent = newItemTextElement.value;
        newOptionElement.value = newItemValueElement.value;

        const selectMenuElement = document.getElementById('menu');
        selectMenuElement.appendChild(newOptionElement);

        formElement.reset();
    });
}
