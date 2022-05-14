function whileDemo(input) {
    let index = 0;
    let totalSum = 0;
    let currentInput = input[index];

    while (currentInput !== 'NoMoreMoney') {
        let inputAsNumber = +currentInput;

        if (inputAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalSum += inputAsNumber;

        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
        index++;
        currentInput = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
