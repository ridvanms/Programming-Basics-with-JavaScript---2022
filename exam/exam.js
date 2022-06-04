function exam(input) {
    let countOfStudents = +input[0];

    let firstGroup = 0;
    let secondGroup = 0;
    let therdGroup = 0;
    let fourthGroup = 0;

    let sum = 0;
    for (let i = 1; i <= countOfStudents; i++) {
        let rating = +input[i];
        sum += rating;
        if (rating >= 5) {
            firstGroup++;
        } else if (rating >= 4) {
            secondGroup++;
        } else if (rating >= 3) {
            therdGroup++;
        } else {
            fourthGroup++;
        }
    }
    let average = sum / countOfStudents
    firstGroup = firstGroup / countOfStudents * 100;
    secondGroup = secondGroup / countOfStudents * 100;
    therdGroup = therdGroup / countOfStudents * 100;
    fourthGroup = fourthGroup / countOfStudents * 100;

    console.log(`Top students: ${firstGroup.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${secondGroup.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${therdGroup.toFixed(2)}%`);
    console.log(`Fail: ${fourthGroup.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
exam(['10', '3', '2.99', '5.68', '3.01', '4', '4', '6', '4.5', '2.44', '5'])