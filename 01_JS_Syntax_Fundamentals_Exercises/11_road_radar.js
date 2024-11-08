// Write a function that determines whether a driver is within the speed limit. 
// You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.

function roadRadar(speed, area) {

    const isMotorwayArea = area === "motorway";
    const isInterstateArea = area === "interstate";
    const isCityArea = area === "city";
    const isResidentialArea = area === "residential";

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let speedLimit;

    if (isMotorwayArea) {
        speedLimit = motorwayLimit;
    } else if (isInterstateArea) {
        speedLimit = interstateLimit;
    } else if (isCityArea) {
        speedLimit = cityLimit;
    } else if (isResidentialArea) {
        speedLimit = residentialLimit;
    }

    if ((isMotorwayArea && speed <= motorwayLimit) ||
        (isInterstateArea && speed <= interstateLimit) ||
        (isCityArea && speed <= cityLimit) ||
        (isResidentialArea && speed <= residentialLimit)) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        const difference = speed - speedLimit;
        const isSpeeding = difference <= 20;
        const isExcessiveSpeeding = difference <= 40;
        const isRecklessDriving = difference > 40;
        let speedingStatus = ""

        if (isSpeeding) {
            speedingStatus = "speeding";
        } else if (isExcessiveSpeeding) {
            speedingStatus = "excessive speeding";
        } else if (isRecklessDriving) {
            speedingStatus = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`);
    }
}


roadRadar(40, 'city'); // Driving 40 km/h in a 50 zone
roadRadar(21, 'residential'); // The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate'); // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway'); // The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
