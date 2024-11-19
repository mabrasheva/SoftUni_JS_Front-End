// Create and print objects from a text table. 
// input is an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
// The latitude and longitude columns will always contain valid numbers.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

function townsList(inputArray) {

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = parseFloat(latitude).toFixed(2);
            this.longitude = parseFloat(longitude).toFixed(2);
        }
    }

    inputArray
        .map(item => item.split(' | '))
        .forEach(item => {
            let [town, latitude, longitude] = item;
            let townObj = new Town(town, latitude, longitude);
            console.log({ ...townObj }); /* Creates a plain object by copying the properties of townObj using the spread operator.
            Removes the class association, ensuring only the properties are logged, matching the exact expected format. */
        });

}

townsList(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
