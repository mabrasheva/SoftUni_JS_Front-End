const baseUrl = 'http://localhost:3030/jsonstore/games';
const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');
const loadButton = document.getElementById('load-games');
const addButton = document.getElementById('add-game');
const editButton = document.getElementById('edit-game');
const gamesListDivElement = document.getElementById('games-list');

function clearInputs() {
    nameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';
}

async function editGameHandler(_id) {
    data = {
        name: nameInput.value,
        type: typeInput.value,
        players: playersInput.value,
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

async function changeGameHandler(element) {
    const { name, type, players, _id } = element;
    nameInput.value = name;
    typeInput.value = type;
    playersInput.value = players;

    editButton.removeAttribute("disabled");
    addButton.setAttribute("disabled", "disabled");

    editButton.addEventListener('click', () => editGameHandler(_id));
}

async function deleteGameHandler(_id) {
    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'DELETE',
    })
        .then(getDataHandler)
        .catch(reason => {
            console.log(reason);
        });
}

async function addDataHandler() {
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    if (!name || !type || !players) {
        return
    }

    data = {
        name,
        type,
        players,
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

function displayData(data) {
    const initialDivElement = gamesListDivElement.querySelector('div.board-game');
    gamesListDivElement.innerHTML = '';

    data.forEach(element => {
        const { name, type, players, _id } = element;
        const gameDivElement = initialDivElement.cloneNode(true);

        const nameParagraphElement = gameDivElement.querySelector('p:nth-child(1)');
        nameParagraphElement.textContent = name;
        const playersParagraphElement = gameDivElement.querySelector('p:nth-child(2)');
        playersParagraphElement.textContent = players;
        const typeParagraphElement = gameDivElement.querySelector('p:nth-child(3)');
        typeParagraphElement.textContent = type;

        gamesListDivElement.appendChild(gameDivElement);

        const changeButton = gameDivElement.querySelector('.change-btn');
        const deleteButton = gameDivElement.querySelector('.delete-btn');

        changeButton.addEventListener('click', () => changeGameHandler(element));
        deleteButton.addEventListener('click', () => deleteGameHandler(_id));
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
