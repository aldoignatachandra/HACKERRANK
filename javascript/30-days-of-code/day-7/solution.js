// Problem Link -> https://www.hackerrank.com/challenges/30-arrays/problem

// 30 Days Of Code
// Day 7 - Arrays

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
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine().replace(/\s+$/g, "").split(" ").map((arrTemp) => parseInt(arrTemp, 10));

  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    result += `${arr[i]} `;
  }

  console.log(result.trim());
}
