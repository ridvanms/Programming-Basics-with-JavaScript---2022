function GvsK(input) {
  let filmBudget = Number(input[0]);
  let supersCount = Number(input[1]);
  let pricePerCloth = Number(input[2]);

  //calculating the decoration price
  let decorPrice = filmBudget * 0.1;
  let priceForClothes = pricePerCloth * supersCount;

  // checking if supers are more then 150
  if (supersCount >= 150) {
    priceForClothes -= priceForClothes * 0.1;
  }
  let totalFilmPrice = decorPrice + priceForClothes;

  let result =
    priceForClothes + decorPrice > filmBudget
      ? `Not enough money!\nWingard needs ${(
          totalFilmPrice - filmBudget
        ).toFixed(2)} leva more.`
      : `Action!\nWingard starts filming with ${(
          filmBudget - totalFilmPrice
        ).toFixed(2)} leva left.`;

  console.log(result);
}
GvsK(["20000", "120", "55.5"]);
