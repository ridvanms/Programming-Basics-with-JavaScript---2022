function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let termDeposit = Number(input[1]);
  let annualInterestRate = Number(input[2]);

  let yearInterestRate = depositAmount * (annualInterestRate / 100);
  let monthInterestRate = yearInterestRate / 12;
  let total = monthInterestRate * termDeposit + depositAmount;
  console.log(total);
}
depositCalculator(["2350", "6", "7"]);
