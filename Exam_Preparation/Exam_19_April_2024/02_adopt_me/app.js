window.addEventListener("load", solve);

function solve() {
    const typeInput = document.getElementById('type');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const adoptButton = document.getElementById('adopt-btn');
    const adoptionInfoUlElement = document.getElementById('adoption-info');
    const adoptedListUlElement = document.getElementById('adopted-list');

    function clearInputs() {
        typeInput.value = '';
        ageInput.value = '';
        genderInput.value = '';
    }

    function createArticle(type, age, gender) {
        const typeParagraphElement = document.createElement('p');
        typeParagraphElement.textContent = `Pet:${type}`;
        const genderParagraphElement = document.createElement('p');
        genderParagraphElement.textContent = `Gender:${gender}`;
        const ageParagraphElement = document.createElement('p');
        ageParagraphElement.textContent = `Age:${age}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(typeParagraphElement);
        articleElement.appendChild(genderParagraphElement);
        articleElement.appendChild(ageParagraphElement);

        return articleElement;
    }

    function createButtons() {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add("edit-btn");

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add("done-btn");

        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add("buttons");

        divButtonsElement.appendChild(editButton);
        divButtonsElement.appendChild(doneButton);

        return [divButtonsElement, editButton, doneButton];
    }

    function editData(type, age, gender, liElement) {
        typeInput.value = type;
        ageInput.value = age;
        genderInput.value = gender;
        adoptionInfoUlElement.removeChild(liElement);
    }

    function clearData(liElement) {
        adoptedListUlElement.removeChild(liElement);
    }

    function doneData(liElement, divButtonsElement) {
        adoptionInfoUlElement.removeChild(liElement);
        adoptedListUlElement.appendChild(liElement);
        liElement.removeChild(divButtonsElement);

        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear';
        clearButton.classList.add("clear-btn");
        liElement.appendChild(clearButton);

        clearButton.addEventListener('click', () => clearData(liElement));
    }

    function getDataHandler(e) {
        e.preventDefault();

        const type = typeInput.value;
        const age = ageInput.value;
        const gender = genderInput.value;

        const articleElement = createArticle(type, age, gender);
        const [divButtonsElement, editButton, doneButton] = createButtons();

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsElement);

        adoptionInfoUlElement.appendChild(liElement);

        clearInputs();

        editButton.addEventListener('click', () => editData(type, age, gender, liElement));
        doneButton.addEventListener('click', () => doneData(liElement, divButtonsElement));
    }

    adoptButton.addEventListener('click', getDataHandler);
    
}
