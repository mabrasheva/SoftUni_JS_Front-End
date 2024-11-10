// Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function passwordValidator(password) {
    let passwordIsValid = true;
    const patternLettersAndNumbers = /^[a-zA-Z0-9]+$/;
    const patternAtLeastTwoDigits = /\d.*\d/;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        passwordIsValid = false;
    }
    if (patternLettersAndNumbers.test(password) === false) {
        console.log('Password must consist only of letters and digits');
        passwordIsValid = false;
    }
    if (patternAtLeastTwoDigits.test(password) === false) {
        console.log('Password must have at least 2 digits');
        passwordIsValid = false;
    }
    if (passwordIsValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn'); // Password must be between 6 and 10 characters // Password must have at least 2 digits
passwordValidator('MyPass123'); // Password is valid
passwordValidator('Pa$s$s'); // Password must consist only of letters and digits // Password must have at least 2 digits
