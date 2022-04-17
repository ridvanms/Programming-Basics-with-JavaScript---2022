function vacationReading(input) {
  let pages = Number(input[0]);
  let pagePerHour = Number(input[1]);
  let days = Number(input[2]);

  let totalTime = pages / pagePerHour;
  let needTime = totalTime / days;

  console.log(needTime);
}
vacationReading(["212", "20", "2"]);
