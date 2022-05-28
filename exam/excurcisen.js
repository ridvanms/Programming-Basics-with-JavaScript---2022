function excursion(input) {
    let peopleCountInGroup = +input[0];
    let nightsCount = +input[1];
    let travelCardCounts = +input[2];
    let ticketCounts = +input[3];

    let pricePerNight = 20;
    let priceTravelCard = 1.6;
    let priceForTicket = 6;

    let nightPrice = nightsCount * pricePerNight;
    let cardForTravelling = travelCardCounts * priceTravelCard;
    let museyTicket = ticketCounts * priceForTicket;

    let totalPricePerPerson = nightPrice + cardForTravelling + museyTicket;

    let priceForAll = totalPricePerPerson * peopleCountInGroup;
    let differentCost = 0.25;

    let finalPrice = priceForAll * 1.25;
    console.log(finalPrice.toFixed(2));
}
excursion(['20', '14', '30', '6'])