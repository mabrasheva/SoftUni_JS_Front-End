function solve() {

    function parseEmployees(employeesData) {

        const employeesArray = [];

        employeesData = employeesData.split(', ')
            .forEach(employee => {
                const [personName, personSalary] = employee.split(' ');
                employeesArray.push({
                    personName,
                    personSalary: Number(personSalary),
                })
            });

        return employeesArray;
    }


    function calcAvgSalary(employeesArray) {
        const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.personSalary, 0);
        const avgSalary = parseFloat((totalSalary / employeesArray.length).toFixed(2));
        return avgSalary;
    }


    function calcBestSalary(employeesArray) {
        let bestSalary = employeesArray.reduce((best, employee) => {
            return employee.personSalary > best ? employee.personSalary : best;
        }, 0);
        return parseFloat(bestSalary).toFixed(2);
    }

    function calcBestRestaurant(restaurants) {
        let bestRestaurant = null;
        let bestAvgSalary = 0;

        for (const [key, value] of Object.entries(restaurants)) {
            if (value.avgSalary > bestAvgSalary) {
                bestAvgSalary = value.avgSalary;
                bestRestaurant = value;
                bestRestaurant.name = key;
            }
        }

        return bestRestaurant;
    }


    let inputs = document.querySelector('div#inputs textarea').value;
    inputsArray = JSON.parse(inputs);
    let bestRestaurantElement = document.querySelector('div#bestRestaurant p');
    let bestRestaurantWorkersElement = document.querySelector('div#workers p');

    let restaurants = {};

    for (const element of inputsArray) { // element is string 'PizzaHut - Peter 500, George 300, Mark 800'
        const [name, employeesData] = element.split(' - '); // employeesData is string - 'Peter 500, George 300, Mark 800'
        const newEmployees = parseEmployees(employeesData);

        if (restaurants[name]) {
            restaurants[name].employees = restaurants[name].employees.concat(newEmployees);
        } else {
            restaurants[name] = {
                employees: newEmployees,
            }
        }

        restaurants[name].avgSalary = calcAvgSalary(restaurants[name].employees);
        restaurants[name].bestSalary = calcBestSalary(restaurants[name].employees);

    }

    const bestRestaurant = calcBestRestaurant(restaurants);

    const bestRestaurantString = `Name: ${bestRestaurant.name} Average Salary: ${(bestRestaurant.avgSalary).toFixed(2)} Best Salary: ${bestRestaurant.bestSalary}`;
    bestRestaurantElement.textContent = bestRestaurantString;

    const bestRestaurantEmployeesString = bestRestaurant.employees
        .sort((a, b) => b.personSalary - a.personSalary)
        .map(employee => `Name: ${employee.personName} With Salary: ${employee.personSalary}`)
        .join(' ');

    bestRestaurantWorkersElement.textContent = bestRestaurantEmployeesString;
}
