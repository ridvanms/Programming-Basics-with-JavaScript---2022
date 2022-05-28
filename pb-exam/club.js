function club(input) {
    let index = 0;
    let goal = +input[index];
    index++;
    let collectMoney = 0;
    while (input[index] !== 'Party') {
        let drink = input[index];
        let priceByLength = drink.length;
        index++;
        let drinkCounts = +input[index];
        collectMoney += priceByLength * drinkCounts;
        let moneyForThis = priceByLength * drinkCounts;
        if (moneyForThis)
            if (collectMoney >= goal) {
                break;
            }
        index++;

    }

}