// Function that receives a single parameter – an object, containing five properties: { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"

function cityList(cityInfo) {
    for (let [cityParameter, value] of Object.entries(cityInfo)) {
        console.log(`${cityParameter} -> ${value}`);
    }
}

cityList({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)
