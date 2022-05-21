function combination(input) {
    let sum = 0;
    for (let x1 = 0; x1 <= +input[0]; x1++) {
        for (let x2 = 0; x2 <= +input[0]; x2++) {
            for (let x3 = 0; x3 <= +input[0]; x3++) {
                if (x1 + x2 + x3 === +input[0]) {
                    sum++;
                }
            }
        }
    }
    console.log(sum)
}
combination(['25']);
