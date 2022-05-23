function equalSums(input) {
    let firstNum = +input[0];
    let secondNum = +input[1];

    let evenSum = 0;
    let oddSum = 0;
    let nums = '';
    for (let number = firstNum; number <= secondNum; number++) {
        for (let i = 0; i < input[0].length; i++) {
            let strNumber = String(number);
            if (i % 2 === 0) {
                evenSum += Number(strNumber[i]);
            } else {
                oddSum += Number(strNumber[i]);
            }
        }

        if (evenSum === oddSum) {
            nums += `${number} `;
        }
        evenSum = 0;
        oddSum = 0;

    }
    console.log(nums);
}
equalSums(['100000', '100050'])