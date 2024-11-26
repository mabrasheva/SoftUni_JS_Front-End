function sumTable() {
    const tdElements = document.querySelectorAll('table tr > td:nth-child(2):not(#sum)');
    let sumElement = document.getElementById('sum');
    let sumTdElements = Array.from(tdElements)
        .reduce((sum, td) => {
            return sum + Number(td.textContent);
        }, 0);
    sumElement.textContent = sumTdElements;
}
