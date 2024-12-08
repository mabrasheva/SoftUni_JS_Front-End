function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const submitButtonElement = document.getElementById('submit');
    const refreshButtonElement = document.getElementById('refresh');
    const textareaElement = document.getElementById('messages');


    async function postMessageHandler() {
        const [authorInputElement, contentInputElement] = document.querySelectorAll('div#controls input[type="text"]');
        data = {
            author: authorInputElement.value,
            content: contentInputElement.value,
        }
        return fetch(
            baseUrl, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(() => {
                authorInputElement.value = "";
                contentInputElement.value = "";
            });
    }

    function loadMessages(messages) {
        let result = [];
        Object.values(messages)
            .forEach(({ author, content }) => {
                result.push(`${author}: ${content}`);
            });
        textareaElement.value = result.join('\n');
    }

    async function getMessagesHandler(e) {
        e.preventDefault();
        return fetch(baseUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(loadMessages)
            .catch(reason => {
                console.log(reason);
            });
    }

    submitButtonElement.addEventListener('click', postMessageHandler);
    refreshButtonElement.addEventListener('click', getMessagesHandler);

}

attachEvents();
