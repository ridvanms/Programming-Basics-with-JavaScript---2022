function result(input) {
  // const rating = Number(input[0]);
  // if (rating >= 5.5) {
  //   console.log("Excellent!");
  // }
  const result = Number(input[0]) >= 5.5 ? "Excellent!" : "";
  console.log(result);
}
result(["5.5"]);
