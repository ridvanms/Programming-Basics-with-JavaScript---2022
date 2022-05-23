function specialNumbers(input) {
    let factor = +input[0];
    let specialNumbers = '';
    for (let i = 1111; i <= 9999; i++) {
        let numCounts = 0;
        let stringNumber = `${i}`
        for (let num = 0; num < 4; num++) {
            if (factor % Number(stringNumber[num]) === 0) {
                numCounts++;
            } else {
                break;
            }
        }
        if (numCounts === 4) {
            specialNumbers += `${i} `;
        }
    }
    console.log(specialNumbers);
}
specialNumbers(['11'])