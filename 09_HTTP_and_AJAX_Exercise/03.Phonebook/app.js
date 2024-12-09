function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');
    const phonebookUlElement = document.getElementById('phonebook');
    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');


    async function deletePhonebookEntryHandler(_id) {
        return fetch(
            `${baseUrl}/${_id}`, {
            method: 'DELETE',
        })
            .then(getPhonebookHandler)
            .catch(reason => {
                console.log(reason);
            });
    }

    function loadPhonebook(phonebookObject) {
        phonebookUlElement.innerHTML = '';
        Object.values(phonebookObject).forEach(({ person, phone, _id }) => {

            const liElement = document.createElement('li');
            liElement.textContent = `${person}: ${phone}`;

            const buttonElement = document.createElement('button');
            buttonElement.id = _id;
            buttonElement.textContent = 'Delete';
            buttonElement.addEventListener("click", (e) =>
                deletePhonebookEntryHandler(_id, e)
            );

            liElement.appendChild(buttonElement);
            phonebookUlElement.appendChild(liElement);
        });

    }

    async function getPhonebookHandler() {
        return fetch(baseUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(loadPhonebook)
            .catch(reason => {
                console.log(reason);
            });
    }

    async function createPhonebookEntryHandler() {
        data = {
            person: personInputElement.value,
            phone: phoneInputElement.value,
        }

        return fetch(
            baseUrl, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(() => {
                personInputElement.value = "";
                phoneInputElement.value = "";
            })
            .then(getPhonebookHandler)
            .catch(reason => {
                console.log(reason);
            });
    }

    loadButtonElement.addEventListener('click', getPhonebookHandler);
    createButtonElement.addEventListener('click', createPhonebookEntryHandler);

}

attachEvents();
