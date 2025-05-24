// Solution to the 'Smart Number' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/smart-number/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  const numbers = input.trim().split("\n").filter(Boolean);

  for (let i = 0; i < numbers.length; i++) {
    const num = parseInt(numbers[i], 10);
    const root = Math.floor(Math.sqrt(num));
    const isSmart = root * root === num;
    console.log(isSmart ? "YES" : "NO");
  }
});
