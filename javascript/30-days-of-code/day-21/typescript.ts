"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function printArray<T>(array: T[]): void {
  for (let element of array) {
    console.log(element);
  }
}

function main() {
  let n: number = parseInt(readLine().trim(), 10);

  const intArray: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    intArray[i] = parseInt(readLine().trim(), 10);
  }

  n = parseInt(readLine().trim(), 10);

  const stringArray: string[] = new Array(n);
  for (let i = 0; i < n; i++) {
    stringArray[i] = readLine().trim();
  }

  printArray<number>(intArray);
  printArray<string>(stringArray);
}
