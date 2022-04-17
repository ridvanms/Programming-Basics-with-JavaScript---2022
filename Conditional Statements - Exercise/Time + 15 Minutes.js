function time(input) {
  let h = Number(input[0]);
  let min = Number(input[1]);
  let afterAdding = 15 + min;

  if (afterAdding >= 60) {
    h += afterAdding / 60;
    min = afterAdding % 60;

    h = Math.floor(h);
  } else {
    min += 15;
  }
  if (h > 23) {
    h = 0;
  }

  console.log(`${h ? `${h}` : "0"}:${min > 9 ? min : `0${min}`}`);
}
time(["12", "49"]);
