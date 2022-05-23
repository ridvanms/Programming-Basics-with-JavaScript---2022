function prime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;

    let negativeNumber = false;

    let index = 0;
    while (input[index] !== 'stop') {
        if (+input[index] < 0) {
            negativeNumber = true;
        } else if (+input[index] > 3 && (+input[index] % 2 === 0 || +input[index] % 3 === 0)) {
            sumNonPrime += +input[index];
        } else {
            sumPrime += +input[index];
        }
        index++;
    }
    if (negativeNumber) {
        console.log('Number is negative.')
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
}
prime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])	