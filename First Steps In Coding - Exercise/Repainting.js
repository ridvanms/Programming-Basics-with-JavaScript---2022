function repaining(input) {
  let priceNylon = 1.5;
  let pricePaint = 14.5;
  let pricePaintThinner = 5;
  let bag = 0.4;

  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let paintThinner = Number(input[2]);
  let hours = Number(input[3]);

  paint = paint * 1.1;
  nylon = nylon + 2;

  let stockPrice =
    nylon * priceNylon +
    paint * pricePaint +
    paintThinner * pricePaintThinner +
    bag;
  let workerPriceForOneHour = stockPrice * 0.3;

  let total = hours * workerPriceForOneHour + stockPrice;
  console.log(total);
}
repaining(["10", "11", "4", "8"]);
