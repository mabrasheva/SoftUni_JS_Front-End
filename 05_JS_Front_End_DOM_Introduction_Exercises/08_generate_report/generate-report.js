function solve() {

    result = [];

    const columnsArray = Array.from(document.querySelectorAll('table thead tr th'));

    const checkedIndexes = columnsArray.reduce((acc, th, index) => {
        if (th.children[0].checked === true) {   // if (th.querySelector('input:checked'))
            acc.push(index);
        }
        return acc;
    }, []);

    const rowsArray = Array.from(document.querySelectorAll('table tbody tr'));

    for ([index, row] of rowsArray.entries()) {

        const rowData = {};

        checkedIndexes.forEach(index => {
            const columnName = columnsArray[index].textContent.toLowerCase().trim();
            const cellValue = row.children[index]?.textContent.trim();
            rowData[columnName] = cellValue;
        });

        result.push(rowData);

    }

    document.querySelector('textarea#output').textContent = JSON.stringify(result);

}
