// Problem Link -> https://www.hackerrank.com/challenges/30-2d-arrays/problem

// 30 Days Of Code
// Day 11 - 2D Arrays

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().replace(/\s+$/g, "").split(" ").map((arrTemp) => parseInt(arrTemp, 10));
  }

  let maxSum = -Infinity;

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      const currentSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  console.log(maxSum);
}
