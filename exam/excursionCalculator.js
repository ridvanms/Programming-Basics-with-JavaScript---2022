function calculator(input) {
    let peopleCount = +input[0];
    let sesson = input[1];

    let differenetCost = 1;
    let pricePerPerson = 0;
    if (peopleCount <= 5) {
        if (sesson === 'spring') {
            pricePerPerson = 50;
        } else if (sesson === 'summer') {
            differenetCost = 0.85;
            pricePerPerson = 48.5;
        } else if (sesson === 'autumn') {
            pricePerPerson = 60;
        } else if (sesson === 'winter') {
            differenetCost = 1.08;
            pricePerPerson = 86;
        }
    } else {
        switch (sesson) {
            case 'spring': pricePerPerson = 48; break;
            case 'summer': pricePerPerson = 45; differenetCost = 0.85; break;
            case 'autumn': pricePerPerson = 49.5; break;
            case 'winter': pricePerPerson = 85; differenetCost = 1.08; break;
        }
    }

    let totalPrice = peopleCount * pricePerPerson;
    let finalPrice = totalPrice * differenetCost;
    console.log(`${finalPrice.toFixed(2)} leva.`)
}
calculator(['10', 'summer'])