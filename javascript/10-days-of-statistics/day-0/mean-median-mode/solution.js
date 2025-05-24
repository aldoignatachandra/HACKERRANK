// hackker rank problem -> https://www.hackerrank.com/challenges/s10-basic-statistics/problem

function processData(input) {
  let count = input.split("\n")[0];
  let inputs = input
    .split("\n")[1]
    .split(" ")
    .map((item) => item);

  // Mean
  var total = inputs.reduce(
    (input, index) => parseFloat(input) + parseFloat(index),
    0
  );
  var mean = total / count;

  // Median
  var sortedArray = inputs.sort((a, b) => {
    return a - b;
  });
  var median =
    count % 2 === 0
      ? (parseFloat(sortedArray[count / 2]) +
          parseFloat(sortedArray[count / 2 - 1])) /
        2
      : parseFloat(sortedArray[(count + 1) / 2]);

  // Mode
  var modes = [],
    counts = [],
    i,
    number,
    maxIndex = 0;

  for (i = 0; i < count; i++) {
    number = inputs[i];
    counts[number] = (counts[number] || 0) + 1;
    if (counts[number] > maxIndex) {
      maxIndex = counts[number];
    }
  }

  for (i in counts) {
    if (counts.hasOwnProperty(i)) {
      if (counts[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
  }

  console.log(mean);
  console.log(median);
  modes.length > 1 ? console.log(modes[0]) : console.log(modes);
}
