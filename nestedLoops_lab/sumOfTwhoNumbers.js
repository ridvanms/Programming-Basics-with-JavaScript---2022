function summing(input) {
    let fNums = +input[0];
    let sNums = +input[1];
    let magicNum = +input[2];

    let combinations = 0;
    let first = 0;
    let second = 0;
    for (let x1 = fNums; x1 <= sNums; x1++) {
        for (let x2 = fNums; x2 <= sNums; x2++) {
            if (x1 + x2 === magicNum) {
                combinations++;
                first = x1;
                second = x2;
            }
        }
    }
    if (combinations === 0) {
        console.log(``)
    }
    console.log(`Combination N:${combinations} ${second} + ${first} = ${magicNum}`)
}
summing(['1', '10', '5']);