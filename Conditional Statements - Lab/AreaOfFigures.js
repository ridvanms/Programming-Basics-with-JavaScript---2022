function areaOfFigures(input) {
  let figure = input[0];
  if (figure == "square") {
    let num = Number(input[1]);

    let area = num ** 2;
    console.log(area.toFixed(3));
  } else if (figure == "rectangle") {
    let width = Number(input[1]);
    let length = Number(input[2]);

    let area = width * length;
    console.log(area.toFixed(3));
  } else if (figure === "circle") {
    let radius = Number(input[1]);

    let result = Math.PI * radius ** 2;
    console.log(result.toFixed(3));
  } else if (figure === "triangle") {
    let base = Number(input[1]);
    let height = Number(input[2]);

    let result = 0.5 * base * height;
    console.log(result.toFixed(3));
  }
}
areaOfFigures(["triangle", "4.5", "20"]);
