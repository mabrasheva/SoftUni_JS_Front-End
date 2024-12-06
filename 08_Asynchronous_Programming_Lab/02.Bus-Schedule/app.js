function solve() {

    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoBox = document.querySelector('div#info span.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let stopId = 'depot';
    let stopName = '';

    function depart() {
        fetch(`${baseUrl}/${stopId}`)
            .then(response => response.json())
            .then(result => {
                stopName = result.name;
                stopId = result.next;
                infoBox.textContent = `Next stop ${stopName}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(reason => {
                infoBox.textContent = 'Error';
                console.log(reason);
            });
    }

    async function arrive() {
        infoBox.textContent = `Arriving at ${stopName}`
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
