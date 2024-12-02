function deleteByEmail() {
    const emailToDelete = document.querySelector('input[type="text"][name="email"]');
    const resultElement = document.querySelector('div#result');
    const tableTdElements = document.querySelectorAll('table#customers tbody tr td');

    for (const td of tableTdElements) {
        if (td.textContent == emailToDelete.value) {
            td.closest('tr').remove();
            resultElement.textContent = 'Deleted.';
            break;
        }
        resultElement.textContent = 'Not found.';
    }

    emailToDelete.value = '';
}
