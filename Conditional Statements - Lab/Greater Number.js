function greater(input) {
  let index = 0;
  let firstNum = Number(input[index]);
  index++;
  let secondNum = Number(input[index]);

  let result = firstNum > secondNum ? `${firstNum}` : `${secondNum}`;
  console.log(result);
}
greater(["5", "3"]);
