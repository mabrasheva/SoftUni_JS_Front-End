document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const inputElement = document.querySelector('form#input textarea');
    const generateButtonElement = document.querySelector('form#input input[type="submit"]');
    const tableListElement = document.querySelector('table tbody');
    const buyButtonElement = document.querySelector('form#shop input[type="submit"]');
    const buyTextareaElement = document.querySelector('form#shop textarea');


    function generateContent(e) {
        e.preventDefault();

        const inputList = JSON.parse(inputElement.value);
        
        inputList.forEach(element => {

            const newTrElement = document.createElement('tr');

            const productImageTdElement = document.createElement('td');
            const newImgElement = document.createElement('img');
            newImgElement.src = element.img;
            productImageTdElement.appendChild(newImgElement);

            const productNameTdElement = document.createElement('td');
            const newNameElement = document.createElement('p');
            newNameElement.textContent = element.name;
            productNameTdElement.appendChild(newNameElement);

            const productPriceTdElement = document.createElement('td');
            const newPriceElement = document.createElement('p');
            newPriceElement.textContent = Number(element.price);
            productPriceTdElement.appendChild(newPriceElement);

            const productDecFactorTdElement = document.createElement('td');
            const newDecFactorElement = document.createElement('p');
            newDecFactorElement.textContent = Number(element.decFactor);
            productDecFactorTdElement.appendChild(newDecFactorElement);

            const productCheckTdElement = document.createElement('td');
            const newCheckElement = document.createElement('input');
            newCheckElement.type = 'checkbox';
            productCheckTdElement.appendChild(newCheckElement);

            newTrElement.append(
                productImageTdElement,
                productNameTdElement,
                productPriceTdElement,
                productDecFactorTdElement,
                productCheckTdElement
            );

            tableListElement.append(newTrElement);

        });
    };


    function buyFurniture(e) {
        e.preventDefault();
        const checkedRows = tableListElement.querySelectorAll('tr:has(input:checked)');
        let furnitureNameList = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        checkedRows.forEach(row => {
            const furnitureName = row.querySelector('td:nth-child(2) p').textContent;
            furnitureNameList.push(furnitureName);

            const furniturePrice = row.querySelector('td:nth-child(3) p').textContent;
            totalPrice += Number(furniturePrice);

            const furnitureDecFactor = row.querySelector('td:nth-child(4) p').textContent;
            totalDecFactor += Number(furnitureDecFactor);
        });

        const avgDecFactor = totalDecFactor / furnitureNameList.length;
        buyTextareaElement.value = `Bought furniture: ${furnitureNameList.join(', ')}\n`;
        buyTextareaElement.value += `Total price: ${totalPrice}\n`;
        buyTextareaElement.value += `Average decoration factor: ${avgDecFactor}`;
    };

    generateButtonElement.addEventListener('click', generateContent);
    buyButtonElement.addEventListener('click', buyFurniture);

}
