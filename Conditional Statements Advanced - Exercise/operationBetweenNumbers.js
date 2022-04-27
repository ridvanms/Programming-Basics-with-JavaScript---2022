function numberOperations(input) {
  let firstNumber = +input[0];
  let secondNumber = +input[1];
  let symbol = input[2];

  // operations and if the result is even or odd number
  let result;
  let evenOrOdd = "";

  if (!secondNumber && (symbol === "/" || symbol === "%")) {
    console.log(`Cannot divide ${firstNumber} by zero`);
  }

  if (symbol === "+") {
    result = firstNumber + secondNumber;
  } else if (symbol === "-") {
    result = firstNumber - secondNumber;
  } else if (symbol === "*") {
    result = firstNumber * secondNumber;
  } else if (symbol === "/") {
    result = (firstNumber / secondNumber).toFixed(2);
  } else if (symbol === "%") {
    result = firstNumber % secondNumber;
  }

  let symbols = ["+", "-", "*"];
  if (symbols.includes(symbol)) {
    if (result % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(
      `${firstNumber} ${symbol} ${secondNumber} = ${result} - ${evenOrOdd}`
    );
  } else if (symbol === "/" && secondNumber && firstNumber) {
    console.log(`${firstNumber} ${symbol} ${secondNumber} = ${result}`);
  } else if (symbol === "%" && secondNumber && firstNumber) {
    console.log(`${firstNumber} ${symbol} ${secondNumber} = ${result}`);
  }
}
numberOperations(["10", "3", "%"]);
