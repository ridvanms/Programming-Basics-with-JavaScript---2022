function shopping(input) {
  let budget = Number(input[0]);
  let countsGPU = Number(input[1]);
  let countsCPU = Number(input[2]);
  let countsRAM = Number(input[3]);

  let GPUperCount = 250;
  let priceOFGPU = countsGPU * GPUperCount;
  let CPUperCount = priceOFGPU * 0.35;
  let RAM = priceOFGPU * 0.1;

  let totalPrice =
    countsCPU * CPUperCount + countsGPU * GPUperCount + countsRAM * RAM;
  totalPrice =
    countsGPU > countsCPU ? totalPrice - totalPrice * 0.15 : totalPrice;

  let result =
    totalPrice <= budget
      ? `You have ${(budget - totalPrice).toFixed(2)} leva left!`
      : `Not enough money! You need ${(totalPrice - budget).toFixed(
          2
        )} leva more!`;
  console.log(result);
}
shopping(["920.45", "3", "1", "1"]);
