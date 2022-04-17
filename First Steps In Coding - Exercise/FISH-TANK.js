function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let buzySpace = Number(input[3]) / 100;

  let tankVolume = length * width * height;
  let volumeInLitres = tankVolume / 1000;
  let needsLitres = volumeInLitres * (1 - buzySpace);

  console.log(needsLitres);
}
fishTank(["85", "75", "47", "17"]);
