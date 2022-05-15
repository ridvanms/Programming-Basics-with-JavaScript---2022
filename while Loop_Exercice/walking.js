function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    const TARGET = 10000;
    let steps = 0;
    while (command !== 'Going home') {
        steps += +command;
        if (TARGET <= steps) {
            break;
        }
        command = input[index];
        index++;
    }
    if (command === 'Going home') {
        steps += +input[index];
    }
    let diff = Math.abs(TARGET - steps)
    if (TARGET <= steps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`)
    } else {
        console.log(`${diff} more steps to reach goal.`)
    }
}
walking(['1000', '1500', '2000', '6500']);