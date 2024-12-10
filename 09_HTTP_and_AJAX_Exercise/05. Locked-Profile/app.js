function lockedProfile() {

    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    function hideProfileInfo(newProfileElement, HiddenInfoButtonElement, hiddenData) {
        const lockButtonElement = newProfileElement.querySelector('input[type="radio"][value="lock"]');

        if (lockButtonElement.checked) {
            return
        } else {
            if (HiddenInfoButtonElement.textContent === 'Show more') {
                hiddenData.style.display = 'block';
                HiddenInfoButtonElement.textContent = 'Hide it';
            } else {
                hiddenData.style.display = 'none';
                HiddenInfoButtonElement.textContent = 'Show more';
            }
        }
    }

    function displayProfiles(profilesObject) {
        const mainElement = document.querySelector('main');
        const profileElement = mainElement.querySelector('main>div.profile');

        const profilesArray = Object.values(profilesObject);
        profilesArray.forEach(({ _id, username, email, age }) => {
            let newProfileElement = profileElement.cloneNode(true);

            const newProfileRadioElements = newProfileElement.querySelectorAll('input[type="radio"]');
            [...newProfileRadioElements].forEach(radio => {
                radio.name = _id;
            });

            const newProfileUsernameElement = newProfileElement.querySelector('input[type="text"]');
            newProfileUsernameElement.value = username;

            const newProfileEmailElement = newProfileElement.querySelector('input[type="email"]');
            newProfileEmailElement.value = email;

            const newProfileAgeElement = newProfileElement.querySelector('input[type="number"]');
            newProfileAgeElement.value = age;
            mainElement.appendChild(newProfileElement);

            const HiddenInfoButtonElement = newProfileElement.querySelector('button');

            const hiddenData = newProfileElement.querySelector('div');
            hiddenData.style.display = 'none';

            HiddenInfoButtonElement.addEventListener("click", () => hideProfileInfo(newProfileElement, HiddenInfoButtonElement, hiddenData));
        });

        profileElement.remove();

    }

    async function getProfiles() {
        return fetch(baseUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(displayProfiles)
            .catch(reason => {
                console.log(reason);
            });
    }

    getProfiles();

}
