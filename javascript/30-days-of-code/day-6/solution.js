// Problem Link -> https://www.hackerrank.com/challenges/30-review-loop/problem

// 30 Days Of Code
// Day 6 - Let's Review

function processData(input) {
  // Split the input into lines
  const lines = input.split("\n");

  // The first line contains the number of test cases
  const t = parseInt(lines[0], 10);

  // Loop through each test case
  for (let i = 1; i <= t; i++) {
    const str = lines[i];
    let evenChars = "";
    let oddChars = "";

    // Loop through each character in the string
    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) evenChars += str[j];
      else oddChars += str[j];
    }

    console.log(`${evenChars} ${oddChars}`);
  }
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
