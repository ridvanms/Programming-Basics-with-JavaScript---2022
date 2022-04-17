function delivery(input) {
  const chickenMenu = 10.35;
  const fishMenu = 12.4;
  const vegetarianMenu = 8.15;
  const deliveryPrice = 2.5;

  let chickenOrders = Number(input[0]);
  let fishOrders = Number(input[1]);
  let vegetarianOrders = Number(input[2]);

  let chickenPrice = chickenOrders * chickenMenu;
  let fishPrice = fishOrders * fishMenu;
  let vegetarianPrice = vegetarianOrders * vegetarianMenu;

  let price = chickenPrice + fishPrice + vegetarianPrice;

  let dessertPrice = price * (20 / 100);

  let totalPrice = price + deliveryPrice + dessertPrice;

  console.log(totalPrice);
}
delivery(["2", "4", "3"]);
