function train(input) {
    let index = 0;
    let juriCounts = +input[index];
    index++;
    let counting = 0;
    let assessment = 0
    while (input[index] !== 'Finish') {
        let presentation = input[index];
        let summing = 0;
        for (let i = juriCounts; i !== 0; i--) {
            index++;
            summing += +input[index];
            counting++;
            assessment += +input[index];
        }
        console.log(`${presentation} - ${(summing / juriCounts).toFixed(2)}.`)
        index++;
    }
    console.log(`Student's final assessment is ${(assessment / counting).toFixed(2)}.`)
}
train(['2', 'Game', '2.00', '6.00', 'room', '4.00', '5.00', 'Finish'])