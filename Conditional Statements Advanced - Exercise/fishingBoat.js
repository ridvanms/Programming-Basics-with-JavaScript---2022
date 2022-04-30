function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermenCounts = Number(input[2]);

  // rentPrices
  let rent = {
    Spring: 3000,
    Summer: 4200,
    Autumn: 4200,
    Winter: 2600,
  };
  // calculating the price with discounts if there have some
  let priceWithDiscount;

  if (fishermenCounts <= 6) {
    priceWithDiscount = rent[`${season}`] * 0.1;
  } else if (fishermenCounts <= 11) {
    priceWithDiscount = rent[`${season}`] * 0.15;
  } else {
    priceWithDiscount = rent[`${season}`] * 0.25;
  }
  // bonuse discount if there has some
  priceWithDiscount +=
    fishermenCounts % 2 === 0 && season !== "Autumn"
      ? (rent[`${season}`] - priceWithDiscount) * 0.05
      : 0;

  // total price
  let totalPrice = rent[`${season}`] - priceWithDiscount;

  // if there have enough budget
  let result =
    budget >= totalPrice
      ? `Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`
      : `Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`;
  console.log(result);
}
fishingBoat(["3000", "Summer", "12"]);
