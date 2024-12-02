function addItem() {

    let newItemElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const newLiElement = document.createElement('li');
    newLiElement.textContent = newItemElement.value;

    ulElement.appendChild(newLiElement);
    newItemElement.value = '';

}
