"use strict";

const fs = require("fs");

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

/*
 * Complete the 'bitwiseAnd' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER K
 */

function bitwiseAnd(N, K) {
  // Optimized approach
  // If (K-1) | K <= N, then K-1 is the answer
  // Otherwise, K-2 is the answer
  if (((K - 1) | K) <= N) return K - 1;
  return K - 2;
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const count = parseInt(firstMultipleInput[0], 10);

    const lim = parseInt(firstMultipleInput[1], 10);

    const res = bitwiseAnd(count, lim);

    console.log(res + "\n");
  }
}
