function poolDay(input) {
    let peopleCount = +input[0];
    let entryTax = +input[1];
    let priceForLounge = +input[2];
    let pricePerUmbrella = +input[3];

    // calculating
    let bPrice = peopleCount * entryTax;
    let loungeCounts = Math.ceil(peopleCount * 0.75);
    let loungePrice = loungeCounts * priceForLounge;
    let umbrellaCounts = Math.ceil(peopleCount * 0.5)
    let umbrellasPrice = umbrellaCounts * pricePerUmbrella;

    let totalPrice = bPrice + loungePrice + umbrellasPrice;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
poolDay(['21', '5.5', '4.4', '6.2'])