window.addEventListener("load", solve);

function solve() {
    const nameInputElement = document.getElementById('name');
    const timeInputElement = document.getElementById('time');
    const descriptionInputElement = document.getElementById('description');
    const addButton = document.getElementById('add-btn');
    const PreviewListUlElement = document.getElementById('preview-list');
    const archiveListUlElement = document.getElementById('archive-list');

    function clearInputs() {
        nameInputElement.value = '';
        timeInputElement.value = '';
        descriptionInputElement.value = '';
    }

    function createArticleElement() {
        const namePElement = document.createElement('p');
        namePElement.textContent = nameInputElement.value;

        const timePElement = document.createElement('p');
        timePElement.textContent = timeInputElement.value;

        const descriptionPElement = document.createElement('p');
        descriptionPElement.textContent = descriptionInputElement.value;

        const articleElement = document.createElement('article');
        articleElement.appendChild(namePElement);
        articleElement.appendChild(timePElement);
        articleElement.appendChild(descriptionPElement);

        return { articleElement, namePElement, timePElement, descriptionPElement };
    }

    function createButtonElements() {
        const editButton = document.createElement('button');
        editButton.classList.add("edit-btn");
        editButton.textContent = 'Edit';

        const nextButton = document.createElement('button');
        nextButton.classList.add("next-btn");
        nextButton.textContent = 'Next';

        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add("buttons");
        divButtonsElement.appendChild(editButton);
        divButtonsElement.appendChild(nextButton);

        return { divButtonsElement, editButton, nextButton };
    }

    function editDataHandler(namePElement, timePElement, descriptionPElement, liElement) {
        nameInputElement.value = namePElement.textContent;
        timeInputElement.value = timePElement.textContent;
        descriptionInputElement.value = descriptionPElement.textContent;
        liElement.remove();
        addButton.removeAttribute("disabled");
    }

    function archiveDataHandler(liElement){
        archiveListUlElement.removeChild(liElement);
        addButton.removeAttribute("disabled");
    }

    function nextDataHandler(liElement, divButtonsElement) {
        archiveListUlElement.appendChild(liElement);
        liElement.removeChild(divButtonsElement);

        const archiveButtonElement = document.createElement('button');
        archiveButtonElement.classList.add("archive-btn");
        archiveButtonElement.textContent = 'Archive';

        liElement.appendChild(archiveButtonElement);

        archiveButtonElement.addEventListener('click', () => archiveDataHandler(liElement));
    }

    function addDataToPreviewListHandler(e) {
        e.preventDefault();

        if (!nameInputElement.value || !timeInputElement.value || !descriptionInputElement.value) {
            return
        }

        const { articleElement, namePElement, timePElement, descriptionPElement } = createArticleElement();
        const { divButtonsElement, editButton, nextButton } = createButtonElements();

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsElement);
        PreviewListUlElement.appendChild(liElement);

        addButton.setAttribute("disabled", "disabled");

        clearInputs();

        editButton.addEventListener('click', () => editDataHandler(namePElement, timePElement, descriptionPElement, liElement));
        nextButton.addEventListener('click', () => nextDataHandler(liElement, divButtonsElement));
    }

    addButton.addEventListener('click', addDataToPreviewListHandler)

}
