function travelling(input) {
    let i = 0;
    while (input[i] !== 'End') {
        if (!+input[i]) {
            console.log(`Going to ${input[i]}!`)
        }
        i++;
    }
}
travelling(['Greece', '1000', '200', '300', '140', 'Spain', '1200', '300', '400', 'End'])