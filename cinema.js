function cinema(input) {
  let typeProject = input[0];
  let rows = +input[1];
  let columns = +input[2];
  let prize;

  if (typeProject === "Premiere") {
    prize = 12;
  } else if (typeProject === "Normal") {
    prize = 7.5;
  } else if (typeProject === "Discount") {
    prize = 5;
  }
  prize = prize * rows * columns;
  console.log(prize.toFixed(2) + " leva");
}
cinema(["Normal", "21", "13"]);
