document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const emailInputElement = document.querySelector('input#email[type="text"]');
    const emailPattern = /[a-z]+@[a-z]+\.[a-z]+/;

    emailInputElement.addEventListener('change', () => {
        if (emailPattern.test(emailInputElement.value) === false) {
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.value = '';
            emailInputElement.classList.remove('error');
        }
    })
}
