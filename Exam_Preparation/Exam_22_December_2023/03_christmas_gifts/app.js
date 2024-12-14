const baseUrl = 'http://localhost:3030/jsonstore/gifts';
const giftInput = document.getElementById('gift');
const recipientInput = document.getElementById('for');
const priceInput = document.getElementById('price');
const loadButton = document.getElementById('load-presents');
const addButton = document.getElementById('add-present');
const editButton = document.getElementById('edit-present');
const divGiftListElement = document.getElementById('gift-list');

function clearInputs() {
    giftInput.value = '';
    recipientInput.value = '';
    priceInput.value = '';
}

async function addDataHandler() {
    const gift = giftInput.value;
    const recipient = recipientInput.value;
    const price = priceInput.value;

    clearInputs();

    if (!gift || !recipient || !price) {
        return
    }

    data = {
        gift,
        for: recipient,
        price,
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

async function editDataHandler(_id){
    data = {
        gift: giftInput.value,
        for: recipientInput.value,
        price: priceInput.value,
        _id,
    }

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");

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

async function changeDataHandler(element) {
    const { gift, for: recipient, price, _id } = element;
    giftInput.value = gift;
    recipientInput.value = recipient;
    priceInput.value = price;

    editButton.removeAttribute("disabled");
    addButton.setAttribute("disabled", "disabled");

    editButton.addEventListener('click', () => editDataHandler(_id));
}

async function deleteDataHandler(_id) {
    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'DELETE',
    })
        .then(getDataHandler)
        .catch(reason => {
            console.log(reason);
        });
}

function displayData(data) {
    const initialDivElement = divGiftListElement.querySelector('div.gift-sock');
    divGiftListElement.innerHTML = '';

    data.forEach(element => {
        const { gift, for: recipient, price, _id } = element;
        const newDivElement = initialDivElement.cloneNode(true);

        const giftParagraphElement = newDivElement.querySelector('p:nth-child(1)');
        giftParagraphElement.textContent = gift;
        const recipientParagraphElement = newDivElement.querySelector('p:nth-child(2)');
        recipientParagraphElement.textContent = recipient;
        const priceParagraphElement = newDivElement.querySelector('p:nth-child(3)');
        priceParagraphElement.textContent = price;

        divGiftListElement.appendChild(newDivElement);

        const changeButton = newDivElement.querySelector('.change-btn');
        const deleteButton = newDivElement.querySelector('.delete-btn');

        changeButton.addEventListener('click', () => changeDataHandler(element));
        deleteButton.addEventListener('click', () => deleteDataHandler(_id));
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
            displayData(Object.values(data));
        })
        .catch(reason => {
            console.log(reason);
        });
}


loadButton.addEventListener('click', getDataHandler);
addButton.addEventListener('click', addDataHandler);
