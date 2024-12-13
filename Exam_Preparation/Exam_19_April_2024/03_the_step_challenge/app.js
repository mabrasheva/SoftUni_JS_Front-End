const baseUrl = 'http://localhost:3030/jsonstore/records';
const loadButton = document.getElementById('load-records');
const editButton = document.getElementById('edit-record');
const addButton = document.getElementById('add-record');
const listUlElement = document.getElementById('list');
const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

function clearInputs() {
    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';
}

async function editRecordHandler(_id) {
    data = {
        name: nameInput.value,
        steps: stepsInput.value,
        calories: caloriesInput.value,
        _id,
    }

    addButton.removeAttribute("disabled");
    editButton.setAttribute("disabled", "disabled");

    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(getDataHandler)
        .then(clearInputs)
        .catch(reason => {
            console.log(reason);
        });
}

function changeRecordHandler(element) {
    const { name, steps, calories, _id } = element;
    nameInput.value = name;
    stepsInput.value = steps;
    caloriesInput.value = calories;

    editButton.removeAttribute("disabled");
    addButton.setAttribute("disabled", "disabled");

    editButton.addEventListener('click', () => editRecordHandler(_id));
}

async function deleteRecordHandler(_id) {
    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'DELETE',
    })
        .then(getDataHandler)
        .catch(reason => {
            console.log(reason);
        });
}

function displayRecords(data) {
    const initialLiElement = listUlElement.querySelector('li.record');
    listUlElement.innerHTML = '';

    data.forEach(element => {
        const { name, steps, calories, _id } = element;
        const recordLiElement = initialLiElement.cloneNode(true);

        const nameParagraphElement = recordLiElement.querySelector('p:nth-child(1)');
        nameParagraphElement.textContent = name;
        const stepsParagraphElement = recordLiElement.querySelector('p:nth-child(2)');
        stepsParagraphElement.textContent = steps;
        const caloriesParagraphElement = recordLiElement.querySelector('p:nth-child(3)');
        caloriesParagraphElement.textContent = calories;

        listUlElement.appendChild(recordLiElement);

        const changeButton = recordLiElement.querySelector('.change-btn');
        const deleteButton = recordLiElement.querySelector('.delete-btn');

        changeButton.addEventListener('click', () => changeRecordHandler(element));
        deleteButton.addEventListener('click', () => deleteRecordHandler(_id));
    });

    editButton.setAttribute("disabled", "disabled");
}

async function getDataHandler() {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw Error(response.message);
            };
            return response.json();
        })
        .then(data => {
            displayRecords(Object.values(data));
        })
        .catch(reason => {
            console.log(reason);
        });
}

async function addDataHandler() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    clearInputs();

    if (!name || !steps || !calories) {
        return
    }

    data = {
        name,
        steps,
        calories,
    }

    return fetch(baseUrl,
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        }
    )
        .then(response => {
            if (!response.ok) {
                throw Error(response.message);
            };
            return response.json();
        })
        .then(() => {
            getDataHandler();
        })
        .catch(reason => {
            console.log(reason);
        })
}

loadButton.addEventListener('click', getDataHandler);
addButton.addEventListener('click', addDataHandler);
