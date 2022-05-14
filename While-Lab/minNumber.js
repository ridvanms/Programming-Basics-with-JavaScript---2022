function lessest(input) {
    let index = 1;
    let inputElement = input[0]
    let max = Number.MAX_SAFE_INTEGER;

    while (inputElement !== 'Stop') {
        let currentNum = Number(inputElement);
        if (currentNum < max) {
            max = currentNum;
        }
        inputElement = input[index];
        index++;
    }
    console.log(max);
}
lessest(['100', '99', '80', '70', 'Stop'])
