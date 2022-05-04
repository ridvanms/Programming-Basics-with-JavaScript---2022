function hotelRoom(input) {
  let month = input[0];
  let nightsCount = +input[1];

  // May, June, July, August, September или October
  let studioPrice;
  let apartmentPrice;

  switch (month){
      case 'May':
      case 'October':
          studioPrice = 50 * nightsCount;
          apartmentPrice = 65 * nightsCount;
          break;
      case 'June':
      case 'September':
          studioPrice = 75.20 * nightsCount;
          apartmentPrice = 68.70 * nightsCount;
          break;
      case 'July':
      case 'August':
          studioPrice = 76 * nightsCount;
          apartmentPrice = 77 * nightsCount;
          break;
  }

  // calculating discounts if have some
   if(nightsCount > 14){
      apartmentPrice *= 0.9;
  }
  if(nightsCount > 14 && (month === 'June' || month === 'September')){
      studioPrice *= 0.8;
  }else if(nightsCount > 14 && (month ==='May' || month === 'October')){
      studioPrice *= 0.7;
  }else if(nightsCount > 7 && (month ==='May' || month ==='October')){
      studioPrice *= 0.95;
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(['August','20'])

