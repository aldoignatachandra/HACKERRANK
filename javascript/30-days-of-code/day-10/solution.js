// Problem Link -> https://www.hackerrank.com/challenges/30-binary-numbers/problem

// 30 Days Of Code
// Day 10 - Binary Numbers

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
  const binaryStr = n.toString(2);
  const result = Math.max(...binaryStr.split("0").map((group) => group.length));
  console.log(result);
}
