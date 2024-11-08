// Write a function that receives a single number and checks if the grade is excellent or not. 
// If it is, print "Excellent", otherwise print "Not excellent".

function checkGrade(grade) {
    if (grade >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

checkGrade(5.50);
checkGrade(4.35);
