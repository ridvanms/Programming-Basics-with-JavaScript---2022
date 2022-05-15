function examPreparation(input) {
    index = 0;
    let allowLowGrateCounts = +input[index];
    index++;
    let grates = 0;
    let gratesCount = 0;
    let poorGratesCount = 0;

    let problemsCount = 0;
    let lastProblem = '';

    while (input[index] !== 'Enough') {
        problemsCount++
        lastProblem = input[index];
        index++;
        if (+input[index] <= 4) {
            poorGratesCount++;
        }
        grates += +input[index];
        gratesCount++;
        if (poorGratesCount === allowLowGrateCounts) break;
        index++;
    }

    if (poorGratesCount !== allowLowGrateCounts) {
        let avgScore = grates / gratesCount;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${poorGratesCount} poor grades.`)
    }
}
examPreparation(['2', 'Money', '3', 'Story', '5', 'Spring', '5', 'Bus', '2'])
