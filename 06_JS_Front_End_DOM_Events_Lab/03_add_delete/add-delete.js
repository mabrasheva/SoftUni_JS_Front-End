function addItem() {

    let newItemElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    if (newItemElement.value.length === 0) {
        return
    };

    const newLiElement = document.createElement('li');
    newLiElement.textContent = newItemElement.value;

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    newLiElement.appendChild(deleteButton);

    ulElement.appendChild(newLiElement);
    newItemElement.value = '';

    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.closest('li').remove();
    })

}
