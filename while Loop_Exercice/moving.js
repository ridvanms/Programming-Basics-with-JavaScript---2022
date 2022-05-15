function moving(input) {
    let index = 0;
    let freeW = +input[index];
    index++;
    let freeL = +input[index];
    index++;
    let freeH = +input[index];
    index++;

    let totalFreeSpace = freeH * freeL * freeW;
    let haveSpace = true;
    while (input[index] !== 'Done') {
        totalFreeSpace -= +input[index];
        if (totalFreeSpace < 0) {
            haveSpace = false;
            break
        }
        index++;
    }
    if (haveSpace) {
        console.log(`${totalFreeSpace} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`)
    }
}
moving(['10', '1', '2', '4', '6', 'Done']);
