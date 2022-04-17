function numberInRange(input) {
  let num = Number(input[0]);
  let isTrue = num >= -100 && num <= 100 && num != 0 ? "Yes" : "No";
  console.log(isTrue);
}
numberInRange(["1"]);
