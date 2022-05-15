function cake(input) {
    let index = 0;
    let length = +input[index];
    index++;
    let width = +input[index];
    index++;

    let totalPieces = length * width;
    let noMore = false;
    while (input[index] !== "STOP") {
        totalPieces -= +input[index];
        if (totalPieces < 0) {
            noMore = true;
            break;
        }
        index++;
    }
    if (noMore) {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    } else {
        console.log(`${totalPieces} pieces are left.`)
    }
}
cake(['10', '2', '2', '4', '6', 'Stop']);
