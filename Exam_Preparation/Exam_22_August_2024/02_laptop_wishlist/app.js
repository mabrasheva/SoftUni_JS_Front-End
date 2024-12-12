window.addEventListener("load", solve);

function solve() {
    const laptopModelInput = document.getElementById('laptop-model');
    const storageInput = document.getElementById('storage');
    const priceInput = document.getElementById('price');
    const addButton = document.getElementById('add-btn');
    const clearButton = document.querySelector('button.clear');
    const checkListUl = document.getElementById('check-list');
    const laptopsListUl = document.getElementById('laptops-list');


    function clearInputs() {
        laptopModelInput.value = '';
        storageInput.value = '';
        priceInput.value = '';
    }

    function editDataHandler(laptopModel, storage, price) {
        checkListUl.innerHTML = '';
        laptopModelInput.value = laptopModel;
        storageInput.value = storage;
        priceInput.value = price;
        addButton.removeAttribute("disabled");
    }

    function addToWishListDataHandler(liElement, editButton, okButton) {
        laptopsListUl.appendChild(liElement);
        liElement.removeChild(editButton);
        liElement.removeChild(okButton);
        addButton.removeAttribute("disabled");
    }

    function addDataHandler() {
        if (!laptopModelInput.value || !storageInput.value || !priceInput.value) {
            return
        }

        const laptopModelParagraph = document.createElement('p');
        laptopModelParagraph.textContent = laptopModelInput.value;
        const storageParagraph = document.createElement('p');
        storageParagraph.textContent = `Memory: ${storageInput.value} TB`;
        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = `Price: ${priceInput.value}$`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(laptopModelParagraph);
        articleElement.appendChild(storageParagraph);
        articleElement.appendChild(priceParagraph);

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.classList.add('btn');
        editButton.classList.add('edit');

        const laptopModel = laptopModelInput.value;
        const storage = storageInput.value;
        const price = priceInput.value;

        const okButton = document.createElement('button');
        okButton.textContent = 'ok';
        okButton.classList.add('btn');
        okButton.classList.add('ok');

        const liElement = document.createElement('li');
        liElement.classList.add('laptop-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(okButton);

        checkListUl.appendChild(liElement);

        addButton.setAttribute("disabled", "disabled");

        clearInputs();

        editButton.addEventListener('click', () => editDataHandler(laptopModel, storage, price));
        okButton.addEventListener('click', () => addToWishListDataHandler(liElement, editButton, okButton));
    }

    addButton.addEventListener('click', addDataHandler);
    clearButton.addEventListener('click', () => {
        window.location.reload();
    });
}
