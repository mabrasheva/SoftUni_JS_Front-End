document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const inputFields = document.querySelectorAll('input[type=text]');

    inputFields.forEach(element => {
        element.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add('focused');
        })
    });

    inputFields.forEach(element => {
        element.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove('focused');
        })
    });

}
