document.addEventListener('DOMContentLoaded', solve);

function solve() {

    document.querySelector('main').addEventListener('click', (e) => {
        if (e.target.nodeName !== 'BUTTON') return;

        const profileElement = e.target.closest('.profile');
        const checkedElementId = profileElement.querySelector('.radio-group input:checked').id;
        if (checkedElementId.includes('Lock')) return;

        const hiddenFields = profileElement.querySelector('.hidden-fields');

        if (hiddenFields.classList.contains('active')) {
            hiddenFields.classList.remove('active');
            e.target.textContent = 'Show less';
        } else {
            hiddenFields.classList.add('active');
            e.target.textContent = 'Show more';
        }
    });
}
