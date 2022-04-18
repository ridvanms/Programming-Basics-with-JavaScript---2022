function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let counts = Number(input[2]);

  let fruitPriceInWorkDays = {
    banana: 2.5,
    apple: 1.2,
    orange: 0.85,
    grapefruit: 1.45,
    kiwi: 2.7,
    pineapple: 5.5,
    grapes: 3.85,
  };
  let fruitPriceInWeeknd = {
    banana: 2.7,
    apple: 1.25,
    orange: 0.9,
    grapefruit: 1.6,
    kiwi: 3.0,
    pineapple: 5.6,
    grapes: 4.2,
  };
  let workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let weeknd = ["Saturday", "Sunday"];

  if (workDays.includes(day) && fruitPriceInWorkDays[fruit]) {
    let result = counts * fruitPriceInWorkDays[fruit];
    console.log(result.toFixed(2));
  } else if (weeknd.includes(day) && fruitPriceInWeeknd[fruit]) {
    let result = counts * fruitPriceInWeeknd[fruit];
    console.log(result.toFixed(2));
  } else {
    console.log("error");
  }
}
fruitShop(["apple", "Tuesday", "2"]);
