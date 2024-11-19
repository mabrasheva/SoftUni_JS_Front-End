// Function that manages meeting appointments.
// The input comes as an array of strings. Each string contains a weekday and person’s name. 
// For each successful meeting, print a message. 
// If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
// In the end, print a list of all successful meetings. 

function meetingsSchedule(input) {
    let resultSchedule = {};
    input.forEach(element => {
        let [weekday, personName] = element.split(' ');
        if (!resultSchedule[weekday]) {
            resultSchedule[weekday] = personName;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    });
    for (const weekday in resultSchedule) {
        console.log(`${weekday} -> ${resultSchedule[weekday]}`);
    }
}

meetingsSchedule(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);
