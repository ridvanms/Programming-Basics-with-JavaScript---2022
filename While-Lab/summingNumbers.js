function summing(input) {
    let targetSum = +input[0];

    let sum = 0;
    let index = 1;
    while (sum < targetSum) {
        sum += +input[index];
        index++;
    }
    console.log(sum);
}
