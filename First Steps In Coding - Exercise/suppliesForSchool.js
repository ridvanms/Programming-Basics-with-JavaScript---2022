function suppliesForSchool(input) {
  let penCount = Number(input[0]);
  let markerCount = Number(input[1]);
  let detergent = Number(input[2]);
  let discount = Number(input[3]);

  let money = penCount * 5.8 + markerCount * 7.2 + detergent * 1.2;
  let totalMoney = money - money * (discount / 100);

  console.log(totalMoney);
}

suppliesForSchool(["4", "2", "5", "13"]);
