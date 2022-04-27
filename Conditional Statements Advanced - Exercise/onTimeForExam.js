function onTimeForExam(input) {
  let examHour = +input[0];
  let examMinutes = +input[1];
  let arrivedHour = +input[2];
  let arrivedMinutes = +input[3];
  // totalminutes
  let totalExamMinutes = examHour * 60 + examMinutes;
  let totalArrivedMinutes = arrivedHour * 60 + arrivedMinutes;
  // difference
  let difference;

  if (totalExamMinutes < totalArrivedMinutes) {
    difference = totalArrivedMinutes - totalExamMinutes;
  } else {
    difference = totalExamMinutes - totalArrivedMinutes;
  }
  // making min to hours
  let hh = 0;
  let mm = 0;

  if (totalExamMinutes >= totalArrivedMinutes) {
    if (difference === 0) {
      console.log(`On time`);
    } else if (difference <= 30) {
      console.log(`On time \n${difference} minutes before the start`);
    } else if (difference > 30 && difference < 60) {
      mm = difference;
      console.log(`early ${mm} minutes before the start`);
    } else if (difference >= 60) {
      hh = difference / 60;
      mm = difference % 60;
      console.log(
        `Early\n${hh.toFixed(0)}:${
          mm < 10 ? `0${mm}` : mm
        } hours before the start`
      );
    }
  } else if (totalExamMinutes < totalArrivedMinutes) {
    if (difference > 0 && difference <= 30) {
      console.log(`late ${difference} minutes after the start`);
    } else if (difference > 30 && difference < 60) {
      mm = difference;
      hh = difference;
      console.log(`Late\n${mm} minutes after the start`);
    } else if (difference >= 60) {
      hh = difference / 60;
      mm = difference % 60;
      console.log(`Late\n${Math.floor(hh)}:${mm} hours after the start`);
    }
  }
}
onTimeForExam(["14", "00", "15", "30"]);
