function ticketPrice(input) {
  let day = input[0];

  if (day === "Monday") {
    console.log(12);
  } else if (day === "Tuesday") {
    console.log(12);
  } else if (day === "Wednesday") {
    console.log(14);
  } else if (day === "Thursday") {
    console.log(14);
  } else if (day === "Friday") {
    console.log(12);
  } else if (day === "Saturday") {
    console.log(16);
  } else if (day === "Sunday") {
    console.log(16);
  }
}
ticketPrice(["Monday"]);
