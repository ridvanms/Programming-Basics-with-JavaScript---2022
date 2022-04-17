function record(input) {
  let recordInSeconds = Number(input[0]);
  let lengthInMeters = Number(input[1]);
  let secondsPerMeter = Number(input[2]);
  // calculating swimming seconds
  let swimmingSeconds = secondsPerMeter * lengthInMeters;
  // calculating the resistance of water in 15 meters and adding the seconds for times that has resistance
  let slowerTime =
    lengthInMeters >= 15 ? Math.floor(lengthInMeters / 15) * 12.5 : 0;
  let totalTime = (swimmingSeconds + slowerTime).toFixed(2);
  let result =
    totalTime >= recordInSeconds
      ? `No, he failed! He was ${(totalTime - recordInSeconds).toFixed(
          2
        )} seconds slower.`
      : `Yes, he succeeded! The new world record is ${totalTime} seconds.`;

  console.log(result);
}
record(["10464", "1500", "20"]);
