function solve() {
    inputElement = document.getElementById('input');
    resultElement = document.getElementById('result');

    selectOptionElements = document.querySelectorAll('#selectMenuTo option');
    selectedOption = [...selectOptionElements].find(element => element.selected === true);

    if (selectedOption.value === 'binary') {
        resultElement.value = Number(inputElement.value).toString(2);
    } else if (selectedOption.value === 'hexadecimal') {
        resultElement.value = Number(inputElement.value).toString(16).toUpperCase();
    }

}
