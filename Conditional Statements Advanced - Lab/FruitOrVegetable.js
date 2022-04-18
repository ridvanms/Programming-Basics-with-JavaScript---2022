function fruitOrVegetable(input) {
  let food = input[0];

  let fruit = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
  let vegetable = ["tomato", "cucumber", "pepper", "carrot"];

  if (fruit.includes(food)) {
    console.log("fruit");
  } else if (vegetable.includes(food)) {
    console.log("vegetable");
  } else {
    console.log("unknown");
  }
}
fruitOrVegetable(["banana"]);
