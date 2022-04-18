function wHours(input) {
  let hours = Number(input[0]);
  let day = input[1];
  let workingDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let result = workingDays.includes(day);
  if (result && hours <= 18 && hours >= 10) {
    console.log("open");
  } else {
    console.log("closed");
  }
}
wHours(["11", "Monday"]);
