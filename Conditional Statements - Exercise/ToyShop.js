function shop(input) {
  const puzzle = 2.6;
  const speekingBarby = 3;
  const tedyBear = 4.1;
  const minion = 8.2;
  const truckToy = 2;

  const travelPrice = Number(input[0]);
  let puzzleCounts = Number(input[1]);
  let speekingBarbyCounts = Number(input[2]);
  let tedyBearCounts = Number(input[3]);
  let minionCounts = Number(input[4]);
  let truckToyCounts = Number(input[5]);

  let totalCounts =
    puzzleCounts +
    speekingBarbyCounts +
    tedyBearCounts +
    minionCounts +
    truckToyCounts;
  let discount = totalCounts >= 50 ? 25 / 100 : 0;

  // calculating the income
  let puzzlesPrice = puzzle * puzzleCounts;
  let speekingBarbysPrice = speekingBarby * speekingBarbyCounts;
  let tedyBearsPrice = tedyBear * tedyBearCounts;
  let minionsPrice = minion * minionCounts;
  let truckToysPrice = truckToy * truckToyCounts;

  // calculationg the total price
  let totalPrice =
    puzzlesPrice +
    speekingBarbysPrice +
    tedyBearsPrice +
    minionsPrice +
    truckToysPrice;
  let withDiscount = totalPrice * discount;

  let finalPrice = totalPrice - withDiscount;
  let rent = finalPrice * 0.1;
  let reward = finalPrice - rent;
  let result =
    reward >= travelPrice
      ? `Yes! ${(reward - travelPrice).toFixed(2)} lv left.`
      : `Not enough money! ${(travelPrice - reward).toFixed(2)} lv needed.`;

  console.log(result);
}
shop(["320", "8", "2", "5", "5", "1"]);
