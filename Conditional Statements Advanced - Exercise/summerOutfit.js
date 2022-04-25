function summerOutfit(input) {
  let degrees = +input[0];
  let timeOfTheDay = input[1];

  if (degrees >= 10 && degrees <= 18) {
    if (timeOfTheDay === "Morning") {
      console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
    } else if (timeOfTheDay === "Afternoon") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeOfTheDay === "Evening") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (timeOfTheDay === "Morning") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeOfTheDay === "Afternoon") {
      console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (timeOfTheDay === "Evening") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
  } else if (degrees >= 25) {
    if (timeOfTheDay === "Morning") {
      console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (timeOfTheDay === "Afternoon") {
      console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
    } else if (timeOfTheDay === "Evening") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
  }
}
summerOutfit(["22", "Afternoon"]);
