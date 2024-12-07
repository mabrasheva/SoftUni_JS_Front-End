function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    const inputLocationNameElement = document.getElementById('location');
    const getWeatherButton = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');


    const weatherSymbols = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
    }
    const weatherDegreesSymbol = '&#176'   // °

    getWeatherButton.addEventListener('click', displayForecast);

    async function getLocationCode(locationName) {
        return fetch(`${baseUrl}/locations`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const location = data.find(loc => loc.name === locationName);
                return location.code;
            })
            .catch(reason => {
                console.log(reason);
            });
    };

    async function getTodayForecast(locationCode) {
        return fetch(`${baseUrl}/today/${locationCode}`)
            .then(response => {
                return response.json()
            })
            .catch(reason => {
                console.log(reason);
            });
    };

    async function getUpcomingForecast(locationCode) {

        return fetch(`${baseUrl}/upcoming/${locationCode}`)
            .then(response => {
                return response.json()
            })
            .catch(reason => {
                console.log(reason);
            });
    };

    function displayTodayForecast(todayForecastObj) {

        const forecastCurrentElement = document.getElementById('current');
        forecastCurrentElement.innerHTML = '<div class="label">Current conditions</div>'

        const condition = todayForecastObj.forecast.condition;
        const conditionSymbol = weatherSymbols[condition];
        const locationName = todayForecastObj.name;
        const lowTemp = todayForecastObj.forecast.low;
        const highTemp = todayForecastObj.forecast.high;
        const temperature = `${lowTemp}${weatherDegreesSymbol}/${highTemp}${weatherDegreesSymbol}`;


        const todayForecastElement = document.createElement('div');
        todayForecastElement.classList.add('forecasts');
        todayForecastElement.innerHTML = `
        <span class="condition symbol">${conditionSymbol}</span>
        <span class="condition">
            <span class="forecast-data">${locationName}</span>
            <span class="forecast-data">${temperature}</span>
            <span class="forecast-data">${condition}</span>
        </span>
        `;

        forecastCurrentElement.appendChild(todayForecastElement);
    };

    function displayUpcomingForecast(upcomingForecastObj) {

        const forecastUpcomingElement = document.getElementById('upcoming');
        forecastUpcomingElement.innerHTML = '<div class="label">Three-day forecast</div>';

        const upcomingForecastElement = document.createElement('div');
        upcomingForecastElement.classList.add('forecast-info');

        forecastUpcomingElement.appendChild(upcomingForecastElement);

        const upcomingForecastArr = upcomingForecastObj.forecast;

        for (const element of upcomingForecastArr) {
            let condition = element.condition;
            let conditionSymbol = weatherSymbols[condition]
            let temperature = `${element.low}${weatherDegreesSymbol}/${element.high}${weatherDegreesSymbol}`;

            const spanElement = document.createElement('span');
            spanElement.classList.add('upcoming');

            spanElement.innerHTML = `
                <span class="symbol">${conditionSymbol}</span>
                <span class="forecast-data">${temperature}</span>
                <span class="forecast-data">${condition}</span>
            `;

            upcomingForecastElement.appendChild(spanElement);
        }

    };

    async function displayForecast(e) {
        e.preventDefault();

        forecastElement.innerHTML = `
            <div id="current">
                <div class="label">Current conditions</div>
            </div>
            <div id="upcoming">
                <div class="label">Three-day forecast</div>
            </div>`;

        try {

            const locationName = inputLocationNameElement.value;

            const locationCode = await getLocationCode(locationName);
            const todayForecastObj = await getTodayForecast(locationCode);
            const upcomingForecastObj = await getUpcomingForecast(locationCode);

            displayTodayForecast(todayForecastObj);
            displayUpcomingForecast(upcomingForecastObj);

            forecastElement.style.display = 'block';
        } catch (error) {
            forecastElement.textContent = 'Error';
            forecastElement.style.display = 'block';
        }

        inputLocationNameElement.value = '';

    };
}

attachEvents();
