const baseUrl = 'http://localhost:3030/jsonstore/matches';

const loadMatchesButton = document.getElementById('load-matches');
const editMatchButton = document.getElementById('edit-match');
const addMatchButton = document.getElementById('add-match');
const matchesListUlElement = document.getElementById('list');
const hostInputElement = document.getElementById('host');
const scoreInputElement = document.getElementById('score');
const guestInputElement = document.getElementById('guest');

function clearInputs() {
    hostInputElement.value = '';
    scoreInputElement.value = '';
    guestInputElement.value = '';
}

async function editMatchHandler(match) {
    const host = hostInputElement.value;
    const score = scoreInputElement.value;
    const guest = guestInputElement.value;
    const _id = match._id;

    data = {
        host,
        score,
        guest,
        _id,
    }

    addMatchButton.removeAttribute("disabled");
    editMatchButton.setAttribute("disabled", "disabled");

    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(loadMatchesHandler)
        .then(clearInputs)
        .catch(reason => {
            console.log(reason);
        });


}

async function changeMatchHandler(match) {

    hostInputElement.value = match.host;
    scoreInputElement.value = match.score;
    guestInputElement.value = match.guest;

    editMatchButton.removeAttribute("disabled");
    addMatchButton.setAttribute("disabled", "disabled");

    editMatchButton.addEventListener('click', () => editMatchHandler(match));
}

async function deleteMatchHandler(_id) {
    return fetch(
        `${baseUrl}/${_id}`, {
        method: 'DELETE',
    })
        .then(loadMatchesHandler)
        .catch(reason => {
            console.log(reason);
        });
}

function displayMatches(matches) {
    const initialMatchLiElement = matchesListUlElement.querySelector('li.match');
    matchesListUlElement.innerHTML = '';

    matches.forEach(match => {

        const matchLiElement = initialMatchLiElement.cloneNode(true);

        const hostParagraphElement = matchLiElement.querySelector('p:nth-child(1)');
        hostParagraphElement.textContent = match.host;
        const hostScoreElement = matchLiElement.querySelector('p:nth-child(2)');
        hostScoreElement.textContent = match.score;
        const hostGuestElement = matchLiElement.querySelector('p:nth-child(3)');
        hostGuestElement.textContent = match.guest;

        matchesListUlElement.appendChild(matchLiElement);

        const changeButtonElement = matchLiElement.querySelector('.change-btn');
        const deleteButtonElement = matchLiElement.querySelector('.delete-btn');

        changeButtonElement.addEventListener('click', () => changeMatchHandler(match));
        deleteButtonElement.addEventListener('click', () => deleteMatchHandler(match._id));
    });

    editMatchButton.removeAttribute("disabled");
}

async function loadMatchesHandler() {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw Error(response.message);
            };
            return response.json();
        })
        .then(data => {
            displayMatches(Object.values(data));
        })
        .catch(reason => {
            console.log(reason);
        });
}

// function addMatchHandler() {
//     const host = hostInputElement.value;
//     const score = scoreInputElement.value;
//     const guest = guestInputElement.value;

//     if (!host || !score || !guest) {
//         return
//     }

//     data = {
//         host,
//         score,
//         guest,
//     };

//     fetch(baseUrl,
//         {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(data),
//         }
//     )
//         .then(response => {
//             if (!response.ok) {
//                 throw Error(response.message);
//             };
//         })
//         .then(loadMatchesHandler)
//         .catch(reason => {
//             console.log(reason);
//         })

//     clearInputs();
// }


async function addMatchHandler() {

    const host = hostInputElement.value;
    const score = scoreInputElement.value;
    const guest = guestInputElement.value;

    clearInputs();
    
    if (!host || !score || !guest) {
        return
    }

    data = {
        host,
        score,
        guest,
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
            loadMatchesHandler();
            
        })
        .catch(reason => {
            console.log(reason);
        })
}


loadMatchesButton.addEventListener('click', loadMatchesHandler);
addMatchButton.addEventListener('click', addMatchHandler)
