window.addEventListener("load", solve);

function solve() {
    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');
    const addButton = document.getElementById('add-btn');
    const taskListUl = document.getElementById('task-list');
    const doneListUl = document.getElementById('done-list');

    function clearInputs() {
        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';
    }

    function editDataHandler(place, action, person) {
        taskListUl.innerHTML = '';
        placeInput.value = place;
        actionInput.value = action;
        personInput.value = person;
    }

    function doneDataHandler(liElement, divButtonsElement) {
        taskListUl.removeChild(liElement);
        doneListUl.appendChild(liElement);
        liElement.removeChild(divButtonsElement);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        liElement.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            doneListUl.removeChild(liElement);
        })
    }

    function addDataHandler() {
        if (!placeInput.value || !actionInput.value || !personInput.value) {
            return
        }

        const placeParagraph = document.createElement('p');
        placeParagraph.textContent = `Place:${placeInput.value}`;
        const actionParagraph = document.createElement('p');
        actionParagraph.textContent = `Action:${actionInput.value}`;
        const personParagraph = document.createElement('p');
        personParagraph.textContent = `Person:${personInput.value}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placeParagraph);
        articleElement.appendChild(actionParagraph);
        articleElement.appendChild(personParagraph);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done');

        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add('buttons');
        divButtonsElement.appendChild(editButton);
        divButtonsElement.appendChild(doneButton);

        const place = placeInput.value;
        const action = actionInput.value;
        const person = personInput.value;

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsElement);

        taskListUl.appendChild(liElement);

        clearInputs();

        editButton.addEventListener('click', () => editDataHandler(place, action, person));
        doneButton.addEventListener('click', () => doneDataHandler(liElement, divButtonsElement));
    }

    addButton.addEventListener('click', addDataHandler);
}
