function summing(input) {
  let fSeconds = Number(input[0]);
  let sSeconds = Number(input[1]);
  let tSeconds = Number(input[2]);

  let min;
  let sec;

  let sum = fSeconds + sSeconds + tSeconds;
  if (sum >= 60) {
    min = Math.floor(sum / 60);
    sec = sum % 60;

    console.log(`${min}:${sec < 10 ? `0${sec}` : sec}`);
  } else {
    sec = sum;
    min = 0;
    console.log(`${min}:${sec < 10 ? `0${sec}` : sec}`);
  }
}
summing(["50", "50", "49"]);
