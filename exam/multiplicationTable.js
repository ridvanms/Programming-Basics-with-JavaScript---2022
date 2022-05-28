function multiplication(input) {
    let strNumber = input[0]
    let fNum = strNumber[0];
    let sNum = strNumber[1];
    let therdNum = strNumber[2];

    for (let a = 1; a <= therdNum; a++) {
        for (let b = 1; b <= sNum; b++) {
            for (let c = 1; c <= fNum; c++) {
                console.log(`${a} * ${b} * ${c} = ${a * b * c};`);
            }
        }
    }
}
multiplication(['324'])