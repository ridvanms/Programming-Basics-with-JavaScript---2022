function cake(input) {
    let index = 0;
    let length = +input[index];
    index++;
    let width = +input[index];
    index++;

    let totalPieces = length * width;
    let noMore = false;
    while (input[index] !== "Stop") {
        totalPieces -= +input[index];
        if (totalPieces <= +input[index]) {
            noMore = true;
            break;
        }
        index++;
    }
    if (noMore) {
        totalPieces = Math.abs(totalPieces)
        console.log(`No more cake left! You need ${totalPieces} pieces more.`);
    } else {
        console.log(`${totalPieces} pieces are left.`)
    }
}
cake(['10', '2', '2', '4', '6', 'Stop']);
