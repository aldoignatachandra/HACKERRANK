// Solution to the 'XOR Strings' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/strings-xor/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  const [str1, str2] = input.trim().split("\n").filter(Boolean);

  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] ^ str2[i];
  }

  console.log(result);
});
