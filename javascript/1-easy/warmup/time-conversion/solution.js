// Solution to the 'Time Conversion' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  const meridiem = s.substring(8);
  const fullTime = s.substring(0, 8);
  const times = fullTime.split(":");

  if (meridiem === "PM") {
    if (times[0] !== "12") {
      times[0] = parseInt(times[0]) + 12;
    }
  } else {
    if (times[0] === "12") {
      times[0] = "00";
    }
  }

  return times.join(":");
}
