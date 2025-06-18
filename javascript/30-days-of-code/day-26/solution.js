function processData(input) {
  const lines = input.trim().split("\n");
  const [returnDay, returnMonth, returnYear] = lines[0].split(" ").map(Number);
  const [dueDay, dueMonth, dueYear] = lines[1].split(" ").map(Number);

  // Calculate fine
  let fine = 0;

  // Case 1: Book returned after the calendar year
  if (returnYear > dueYear) {
    fine = 10000;
  }

  // Case 2: Book returned in the same year but after the expected month
  else if (returnYear === dueYear && returnMonth > dueMonth) {
    fine = 500 * (returnMonth - dueMonth);
  }

  // Case 3: Book returned in the same year and month but after the expected
  else if (
    returnYear === dueYear &&
    returnMonth === dueMonth &&
    returnDay > dueDay
  ) {
    fine = 15 * (returnDay - dueDay);
  }

  // Case 4: Book returned on or before the expected date (no fine)
  console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
