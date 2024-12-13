window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const categoryInput = document.getElementById('category');
    const checkListUlElement = document.getElementById('check-list');
    const contactListUlElement = document.getElementById('contact-list');
    const addButton = document.getElementById('add-btn');


    function clearInputs() {
        nameInput.value = '';
        phoneInput.value = '';
        categoryInput.value = '';
    }

    function createArticle(name, phone, category) {
        const nameParagraphElement = document.createElement('p');
        nameParagraphElement.textContent = `name:${name}`;
        const phoneParagraphElement = document.createElement('p');
        phoneParagraphElement.textContent = `phone:${phone}`;
        const categoryParagraphElement = document.createElement('p');
        categoryParagraphElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(nameParagraphElement);
        articleElement.appendChild(phoneParagraphElement);
        articleElement.appendChild(categoryParagraphElement);

        return articleElement;
    }

    function createButtons() {
        const editButton = document.createElement('button');
        editButton.classList.add("edit-btn");

        const saveButton = document.createElement('button');
        saveButton.classList.add("save-btn");

        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add("buttons");

        divButtonsElement.appendChild(editButton);
        divButtonsElement.appendChild(saveButton);

        return [divButtonsElement, editButton, saveButton];
    }

    function editData(name, phone, category, liElement) {
        nameInput.value = name;
        phoneInput.value = phone;
        categoryInput.value = category;
        checkListUlElement.removeChild(liElement);
    }

    function deleteData(liElement) {
        contactListUlElement.removeChild(liElement);
    }

    function saveData(liElement, divButtonsElement) {
        checkListUlElement.removeChild(liElement);
        contactListUlElement.appendChild(liElement);
        liElement.removeChild(divButtonsElement);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add("del-btn");
        liElement.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => deleteData(liElement));
    }

    function getDataHandler(e) {
        e.preventDefault();

        const name = nameInput.value;
        const phone = phoneInput.value;
        const category = categoryInput.value;

        if (!name || !phone || !category) {
            return;
        }

        const articleElement = createArticle(name, phone, category);
        const [divButtonsElement, editButton, saveButton] = createButtons();

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsElement);

        checkListUlElement.appendChild(liElement);

        clearInputs();

        editButton.addEventListener('click', () => editData(name, phone, category, liElement));
        saveButton.addEventListener('click', () => saveData(liElement, divButtonsElement));
    }

    addButton.addEventListener('click', getDataHandler);

}
