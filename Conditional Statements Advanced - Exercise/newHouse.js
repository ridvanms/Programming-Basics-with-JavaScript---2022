// function newHouse(input) {
//   let flower = input[0];
//   let flowerCounts = +input[1];
//   let budget = +input[2];
//   let discount = 1;
//   let price = {
//     Roses: 5,
//     Dahlias: 3.8,
//     Tulips: 2.8,
//     Narcissus: 3,
//     Gladiolus: 2.5,
//   };
//   let finalPrice;
//   let discountPrice;

//   if (flower === "Roses" && flowerCounts >= 80) {
//     discount = 0.1;
//   } else if (flower === "Dahlias" && flowerCounts >= 90) {
//     discount = 0.15;
//   } else if (flower === "Tulips" && flowerCounts >= 80) {
//     discount = 0.15;
//   } else if (flower === "Narcissus" && flowerCounts <= 120) {
//     discount = 0.15;
//   } else if (flower === "Gladious" && flowerCounts <= 80) {
//     discount = 0.2;
//   } else {
//     discount = 1;
//   }
//   price = price[`${flower}`] * flowerCounts;

//   discountPrice = price * discount;

//   finalPrice =
//     flower !== "Narcissus" && flower !== "Gladious"
//       ? price - discountPrice === 0
//         ? price
//         : price - discountPrice
//       : price + discountPrice;

//   let enough =
//     finalPrice - budget > 0
//       ? (finalPrice - budget).toFixed(2)
//       : (budget - finalPrice).toFixed(2);

//   let result =
//     budget > finalPrice
//       ? `Hey, you have a great garden with ${flowerCounts} ${flower} and ${enough} leva left.`
//       : `Not enough money, you need ${enough} leva more.`;
//   console.log(result);
// }
// newHouse(["Narcissus", "119", "360"]);
// newHouse(["Roses", "55", "250"]);
// newHouse(["Tulips", "88", "260"]);
function newHouse(input) {
  let flower = input[0];
  let flowersCount = +input[1];
  let budget = +input[2];

  let flowers = {
    Roses: 5,
    Dahlias: 3.8,
    Tulips: 2.8,
    Narcissus: 3,
    Gladiolus: 2.5,
  };
  // calculating the price
  price = flowers[`${flower}`] * flowersCount;

  // calculating the discounts
  if (flower === "Roses" && flowersCount > 80) {
    discountPrice = price * 0.1;
    price -= discountPrice;
  } else if (flower === "Dahlias" && flowersCount > 90) {
    discountPrice = price * 0.15;
    price -= discountPrice;
  } else if (flower === "Tulips" && flowersCount > 80) {
    discountPrice = price * 0.15;
    price -= discountPrice;
  } else if (flower === "Narcissus" && flowersCount < 120) {
    discountPrice = price * 0.15;
    price += discountPrice;
  } else if (flower === "Gladiolus" && flowersCount < 80) {
    discountPrice = price * 0.2;
    price += discountPrice;
  }

  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flower} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else if (budget < price) {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}
newHouse(["Narcissus", "119", "360"]);
