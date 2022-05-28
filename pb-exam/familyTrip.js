function trip(input) {
    let budget = +input[0];
    let nightsCount = +input[1];
    let pricePerNight = +input[2];
    let percentBonus = +input[3];

    if (nightsCount > 7) {
        pricePerNight *= 0.95;
    };
    let bPrice = nightsCount * pricePerNight;
    let differentCost = budget * (percentBonus / 100);
    let totalPrice = differentCost + bPrice;
    if (budget >= totalPrice) {
        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}
trip(['500', '7', '66', '15']);