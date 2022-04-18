function invalidNumber(input) {
  let num = Number(input[0]);

  let result = (num <= 200 && num >= 100) || num === 0 ? "" : "invalid";
  console.log(result);
}
invalidNumber(["150"]);
