function journey(input) {
  let budget = +input[0];
  let season = input[1];

  let spendMoney;
  let destination = "";
  let kindOfRest = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      kindOfRest = "Camp";
      spendMoney = budget * 0.3;
    } else if (season === "winter") {
      kindOfRest = "Hotel";
      spendMoney = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      kindOfRest = "Camp";
      spendMoney = budget * 0.4;
    } else if (season === "winter") {
      kindOfRest = "Hotel";
      spendMoney = budget * 0.8;
    }
  } else if (budget > 1000) {
    destination = "Europe";
    kindOfRest = "Hotel";
    spendMoney = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${kindOfRest} - ${spendMoney.toFixed(2)}`);
}
journey(["1500", "summer"]);
