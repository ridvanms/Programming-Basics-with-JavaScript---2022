function equipment(input) {
  let pricePerYear = Number(input[0]);

  let bootsPrice = pricePerYear - pricePerYear * (40 / 100);
  let outfitPrice = bootsPrice - bootsPrice * (20 / 100);
  let basketballPrice = outfitPrice * 0.25;
  let accessoriesPrice = basketballPrice * 0.2;

  let totalPrice =
    bootsPrice +
    outfitPrice +
    basketballPrice +
    accessoriesPrice +
    pricePerYear;

  console.log(totalPrice);
}
equipment(["365"]);
