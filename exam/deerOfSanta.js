function deer(input) {
    let dayCounts = +input[0];
    let foodInKGLeft = +input[1];
    let firstDeerNeedsPerDay = +input[2];
    let secondDeerNeedsPerDay = +input[3];
    let therdDeerNeedsPerDay = +input[4];

    let firstDeer = dayCounts * firstDeerNeedsPerDay;
    let secondDeer = dayCounts * secondDeerNeedsPerDay;
    let therdDeer = dayCounts * therdDeerNeedsPerDay;

    let totalNeedFood = firstDeer + secondDeer + therdDeer;
    if (foodInKGLeft >= totalNeedFood) {
        console.log(`${Math.floor(foodInKGLeft - totalNeedFood)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalNeedFood - foodInKGLeft)} more kilos of food are needed.`)
    }
}
deer(['5', '10', '2.1', '0.8', '11'])