function graduation(input) {
    let name = input[0];
    let grades = 1;
    let index = 1;
    let sum = 0;
    let excluded = 0;

    while (grades <= 12) {
        let grade = Number(input[index]);

        if (grade >= 4) {
            sum += grade;
            grades++;
            index++;
        } else {
            excluded++;
            break;
        }
    }
    let avgGrade = sum / 12;
    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    };
}
graduation(['Mimi', '5', '6', '5', '4.34', '5.67', '6', '4', '5', '6', '5', '5', '4.56'])
