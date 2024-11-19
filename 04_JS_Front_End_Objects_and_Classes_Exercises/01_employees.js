// Create a list of employees and their personal numbers.
// You will receive an array of strings. 
// Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 

function createEmployeeList(inputArray) {

    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }
    }

    let employeeList = {};
    for (const employeeName of inputArray) {
        let employee = new Employee(employeeName);
        employeeList[employee.name] = employee.personalNumber;
    }

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }

}

createEmployeeList(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
