function greater(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);

  let result = firstNum > secondNum ? `${firstNum}` : `${secondNum}`;
  console.log(result);
}
greater(["5", "3"]);
