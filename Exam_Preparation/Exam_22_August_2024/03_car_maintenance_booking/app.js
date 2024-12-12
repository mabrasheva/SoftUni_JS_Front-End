const baseUrl = 'http://localhost:3030/jsonstore/appointments';

const carModelInput = document.getElementById('car-model');
const carServiceInput = document.getElementById('car-service');
const dateInput = document.getElementById('date');
const loadButton = document.getElementById('load-appointments');
const addButton = document.getElementById('add-appointment');
const editButton = document.getElementById('edit-appointment');
const appointmentListUlElement = document.getElementById('appointments-list');

function clearInputs() {
    carModelInput.value = '';
    carServiceInput.value = '';
    dateInput.value = '';
}

async function editAppointmentHandler(_id) {
    const model = carModelInput.value;
    const service = carServiceInput.value;
    const date = dateInput.value;

    addButton.removeAttribute("disabled");
    editButton.setAttribute("disabled", "disabled");

    clearInputs();

    data = {
        model,
        service,
        date,
        _id,
    }

    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(loadDataHandler)
        .catch(reason => {
            console.log(reason);
        });
}

function changeAppointmentHandler(appointment) {
    const { model, service, date, _id } = appointment;

    carModelInput.value = model;
    carServiceInput.value = service;
    dateInput.value = date;

    editButton.removeAttribute("disabled");
    addButton.setAttribute("disabled", "disabled");

    editButton.addEventListener('click', () => editAppointmentHandler(_id));
}

async function deleteAppointmentHandler(_id) {
    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'DELETE',
    })
        .then(loadDataHandler)
        .catch(reason => {
            console.log(reason);
        });
}

function displayAppointments(appointments) {
    appointmentListUlElement.innerHTML = '';
    appointments.forEach(appointment => {
        const { model, service, date, _id } = appointment;

        const modelElement = document.createElement('h2');
        modelElement.textContent = model;

        const dateElement = document.createElement('h3');
        dateElement.textContent = date;

        const serviceElement = document.createElement('h3');
        serviceElement.textContent = service;

        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add('buttons-appointment');

        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.classList.add('change-btn');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        divButtonsElement.appendChild(changeButton);
        divButtonsElement.appendChild(deleteButton);

        const liElement = document.createElement('li');
        liElement.classList.add('appointment');
        liElement.appendChild(modelElement);
        liElement.appendChild(dateElement);
        liElement.appendChild(serviceElement);
        liElement.appendChild(divButtonsElement);

        appointmentListUlElement.append(liElement);

        changeButton.addEventListener('click', () => changeAppointmentHandler(appointment));
        deleteButton.addEventListener('click', () => deleteAppointmentHandler(_id));
    });

    editButton.setAttribute("disabled", "disabled");
}

async function loadDataHandler() {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw Error(response.message);
            };
            return response.json();
        })
        .then(data => {
            displayAppointments(Object.values(data));
        })
        .catch(reason => {
            console.log(reason);
        });
}

async function addDataHandler() {
    const model = carModelInput.value;
    const service = carServiceInput.value;
    const date = dateInput.value;

    if (!model || !service || !date) {
        return
    }

    clearInputs();

    data = {
        model,
        service,
        date,
    };

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
            loadDataHandler();
        })
        .catch(reason => {
            console.log(reason);
        })
}

loadButton.addEventListener('click', loadDataHandler);
addButton.addEventListener('click', addDataHandler);
