function hotelRoom(input) {
  let month = input[0];
  let nightsCount = +input[1];

  // May, June, July, August, September или October
  let studioPrice;
  let apartmentPrice;

  // how much is the studio and apartmen price per night
  if (month === "May" || month === "October") {
    studioPrice = 50 * nightsCount;
    apartmentPrice = 65 * nightsCount;
  } else if (month === "June" || month === "September") {
    studioPrice = 75.2 * nightsCount;
    apartmentPrice = 68.7 * nightsCount;
  } else if (month === "July" || month === "August") {
    studioPrice = 76 * nightsCount;
    apartmentPrice = 77 * nightsCount;
  }

  // calculating discounts if have some
  let studioDiscountPrice = 0;
  let apartmentDiscountPrice = 0;

  if (
    nightsCount > 7 &&
    nightsCount <= 14 &&
    (month === "May" || month === "October")
  ) {
    studioDiscountPrice = studioPrice * 0.05;
  } else if (nightsCount > 14 && (month === "May" || month === "October")) {
    studioDiscountPrice = studioPrice * 0.3;
  } else if (nightsCount > 14 && (month === "June" || month === "September")) {
    studioDiscountPrice = studioPrice * 0.3;
  }
  if (nightsCount > 14) {
    apartmentDiscountPrice = apartmentPrice * 0.1;
  }

  //  calculating totals for each typeOfRoom
  let totalStudioPrice = studioPrice - studioDiscountPrice;
  let totalApartmentPrice = apartmentPrice - apartmentDiscountPrice;

  console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);
