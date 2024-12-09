function attachEvents() {

    baseUrl = 'http://localhost:3030/jsonstore/collections/students';
    const submitButtonElement = document.getElementById('submit');
    const tableStudentsDataElement = document.querySelector('table#results tbody');
    const [firstNameInputElement, lastNameInputElement, facultyNumberInputElement, gradeInputElement] = document.querySelectorAll('div.inputs input[type="text"]');


    function displayStudents(studentsObject) {
        tableStudentsDataElement.innerHTML = '';

        students = Object.values(studentsObject).forEach(({ firstName, lastName, facultyNumber, grade }) => {
            const trElement = document.createElement('tr');
            [firstName, lastName, facultyNumber, grade.toFixed(2)].forEach(value => {
                const tdElement = document.createElement('td');
                tdElement.textContent = value;
                trElement.appendChild(tdElement);
            });
            tableStudentsDataElement.appendChild(trElement);
        })
    };

    async function getStudentsHandler() {
        return fetch(baseUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(displayStudents)
            .catch(reason => {
                console.log(reason);
            });
    }

    async function createStudentHandler() {

        data = {
            firstName: firstNameInputElement.value,
            lastName: lastNameInputElement.value,
            facultyNumber: facultyNumberInputElement.value,
            grade: gradeInputElement.value,
        };

        for (const value of Object.values(data)) {
            if (!value) return
        }

        return fetch(baseUrl,
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data),
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(getStudentsHandler)
            .catch(reason => {
                console.log(reason);
            });
    }

    getStudentsHandler();
    submitButtonElement.addEventListener('click', createStudentHandler);

}

attachEvents();
