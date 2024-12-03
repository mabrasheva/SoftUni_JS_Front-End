document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const convertButtonElements = document.querySelectorAll('input[type="submit"][value="Convert"]');

    function calcSecondsToMinutes(seconds) {
        return (seconds / 60).toFixed(2);
    }

    function calcSecondsToHours(seconds) {
        return (seconds / 60 / 60).toFixed(2);
    }

    function calcSecondsToDays(seconds) {
        return (seconds / 24 / 60 / 60).toFixed(2);
    }

    function convert(e) {
        e.preventDefault();

        timeInSeconds = 0;

        const formElement = e.currentTarget.closest('form');
        const inputNumber = Number(formElement.querySelector('input[type="number"]').value);

        const daysInputElement = document.getElementById('days-input');
        const hoursInputElement = document.getElementById('hours-input');
        const minutesInputElement = document.getElementById('minutes-input');
        const secondsInputElement = document.getElementById('seconds-input');

        switch (formElement.id) {
            case 'days':
                timeInSeconds = inputNumber * 24 * 60 * 60;
                break;
            case 'hours':
                timeInSeconds = inputNumber * 60 * 60;
                break;
            case 'minutes':
                timeInSeconds = inputNumber * 60;
                break;
            case 'seconds':
                timeInSeconds = inputNumber;
                break;
            default:
                break;
        }

        daysInputElement.value = calcSecondsToDays(timeInSeconds);
        hoursInputElement.value = calcSecondsToHours(timeInSeconds);
        minutesInputElement.value = calcSecondsToMinutes(timeInSeconds);
        secondsInputElement.value = timeInSeconds.toFixed(2);

    }

    [...convertButtonElements].forEach(element => {
        element.addEventListener('click', convert);
    });

}
