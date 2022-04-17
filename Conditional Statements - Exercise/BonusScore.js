function score(input) {
  let number = Number(input[0]);
  let bonusScore = 0;

  if (number > 1000) {
    bonusScore += number * 0.1;
  } else if (number > 100) {
    bonusScore = number * 0.2;
  } else if (number <= 100) {
    bonusScore += 5;
  }
  if (number % 2 == 0) {
    bonusScore += 1;
  } else if (number % 10 === 5) {
    bonusScore += 2;
  }
  console.log(bonusScore);
  console.log(number + bonusScore);
}
score(["15875"]);
