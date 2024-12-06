function getInfo() {

    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const inputElement = document.getElementById('stopId'); // valid IDs 1287, 1308, 1327 and 2334.
    const stopNameElement = document.querySelector('div#stopName');

    const ulElement = document.getElementById('buses');

    ulElement.innerHTML = '';

    fetch(`${baseUrl}/${inputElement.value}`)
        .then(response => response.json())
        .then(result => {
            inputElement.value = '';

            stopNameElement.textContent = result.name;
            const busesList = Object.entries(result.buses);

            const busElements = busesList.map(createBusElement);
            ulElement.append(...busElements);
        })
        .catch(reason => {
            stopNameElement.textContent = 'Error';
        });
}

function createBusElement(bus) {
    const busElement = document.createElement('li');
    const [busId, time] = bus;
    busElement.textContent = `Bus ${busId} arrives in ${time} minutes`
    return busElement;
}
