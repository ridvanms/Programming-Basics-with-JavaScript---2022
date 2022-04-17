function luchBreak(input) {
  let serialName = input[0];
  let epizodDuration = Number(input[1]);
  let restDuration = Number(input[2]);

  let timeForLuch = restDuration * (1 / 8);
  let timeForRest = restDuration * (1 / 4);

  let isLeftTime = restDuration - timeForRest - timeForLuch;
  let result =
    isLeftTime - epizodDuration >= 0
      ? `You have enough time to watch ${serialName} and left with ${
          isLeftTime - epizodDuration
        } minutes free time.`
      : `You don't have enough time to watch ${serialName}, you need ${Math.ceil(
          Math.abs(isLeftTime - epizodDuration)
        )} more minutes.`;

  console.log(result);
}
luchBreak(["Teen Wolf", "48", "60"]);
