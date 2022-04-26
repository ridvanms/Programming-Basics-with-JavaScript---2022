function fishingBoat(input) {
  let budget = +input[0];
  let season = input[1];
  let fishermenCount = +input[2];

  // rent prices
  let rentPrice;

  // looking for what is the season
  if (season === "Spring") {
    rentPrice = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    rentPrice = 4200;
  } else if (season === "Winter") {
    rentPrice = 2600;
  }

  // discounts
  let discountPrice = 0;

  if (fishermenCount <= 6) {
    discountPrice = 0.1 * rentPrice;
  } else if (fishermenCount > 6 && fishermenCount <= 11) {
    discountPrice = 0.15 * rentPrice;
  } else if (fishermenCount > 11) {
    discountPrice = 0.25 * rentPrice;
  }

  // bonus discount
  if (fishermenCount % 2 === 0 && season !== "Autumn") {
    rentPrice -= 0.05 * rentPrice;
  }

  //calculating the total price
  let totalPrice = rentPrice - discountPrice;

  // watching for enough budget
  if (budget >= totalPrice) {
    console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
  } else if (budget < totalPrice) {
    console.log(
      `Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3000", "Summer", "11"]);
