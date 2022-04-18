function tradeComission(input) {
  let city = input[0];
  let sells = Number(input[1]);

  let citys = ["Sofia", "Varna", "Plovdiv"];
  let comissions;

  if (!citys.includes(city) || sells < 0) {
    console.log("error");
  } else {
    if (city === "Sofia") {
      if (sells >= 0 && sells <= 500) {
        comissions = 5 / 100;
      } else if (sells >= 500 && sells <= 1000) {
        comissions = 7 / 100;
      } else if (sells >= 1000 && sells <= 10000) {
        comissions = 8 / 100;
      } else if (sells > 10000) {
        comissions = 12 / 100;
      }
    }
    if (city === "Varna") {
      if (sells >= 0 && sells <= 500) {
        comissions = 4.5 / 100;
      } else if (sells >= 500 && sells <= 1000) {
        comissions = 7.5 / 100;
      } else if (sells >= 1000 && sells <= 10000) {
        comissions = 10 / 100;
      } else if (sells > 10000) {
        comissions = 13 / 100;
      }
    }
    if (city === "Plovdiv") {
      if (sells >= 0 && sells <= 500) {
        comissions = 5.5 / 100;
      } else if (sells >= 500 && sells <= 1000) {
        comissions = 8 / 100;
      } else if (sells >= 1000 && sells <= 10000) {
        comissions = 12 / 100;
      } else if (sells > 10000) {
        comissions = 14.5 / 100;
      }
    }
    console.log((comissions * sells).toFixed(2));
  }
}
tradeComission(["Plovdiv", "1500"]);
