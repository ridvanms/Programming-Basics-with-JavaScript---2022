function multiplication(input) {
    let number = +input[0];
    for (let fNum = 1; fNum <= 10; fNum++) {
        for (let sNum = 1; sNum <= 10; sNum++) {
            console.log(`${fNum} * ${sNum} = ${fNum * sNum}`);
        }
    }
}