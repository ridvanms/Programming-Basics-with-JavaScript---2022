function summing(input) {
    let fNums = +input[0];
    let sNums = +input[1];
    let magicNum = +input[2];

    let combinations = 0;
    let first = 0;
    let second = 0;

    let count = 0;
    for (let x1 = fNums; x1 <= sNums; x1++) {
        for (let x2 = fNums; x2 <= sNums; x2++) {
            if (x1 + x2 === magicNum) {
                count++;
                if (count === 1) {
                    first = x1;
                    second = x2;
                }
            }

        }
    }
    if (!first && !second) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`)
    } else {
        console.log(`Combination N:${combinations} ${first} + ${second} = ${magicNum}`)
    }
}
summing(['88', '888', '1000']);