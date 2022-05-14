function numbers(input) {
    let currentNumber = +input[0];

    let index = 1;
    while (index <= currentNumber) {
        console.log(index)
        index = index * 2 + 1;
    }
}
numbers(['17'])
