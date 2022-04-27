function skiHoliday(input) {
  let daysOfStaying = +input[0];
  let typeOfPlace = input[1];
  let rating = input[2];

  // transforming days to nights
  let nights = daysOfStaying - 1;

  // pricees of typeOfPlace per night
  let roomForOne = 18;
  let apartment = 25;
  let presidentApartment = 35;
  //price
  let price;

  if (typeOfPlace === "room for one person") {
    price = roomForOne * nights;
  } else if (typeOfPlace === "apartment") {
    price = apartment * nights;
  } else if (typeOfPlace === "president apartment") {
    price = presidentApartment * nights;
  }
  // discounts if there have some
  let discountPrice = 0;

  if (typeOfPlace === "apartment") {
    if (daysOfStaying < 10) {
      discountPrice = price * 0.3;
    } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
      discountPrice = price * 0.35;
    } else if (daysOfStaying > 15) {
      discountPrice = price * 0.5;
    }
  } else if (typeOfPlace === "president apartment") {
    if (daysOfStaying < 10) {
      discountPrice = price * 0.1;
    } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
      discountPrice = price * 0.15;
    } else if (daysOfStaying > 15) {
      discountPrice = price * 0.2;
    }
  }

  // if the rating is positive or negative
  if (rating === "positive") {
    discountPrice -= (price - discountPrice) * 0.25;
  } else if (rating === "negative") {
    discountPrice -= (price - discountPrice) * 0.1;
  }

  // total price
  let totalPrice = (price - discountPrice).toFixed(2);
  console.log(`${totalPrice}`);
}
skiHoliday(["2", "apartment", "positive"]);
