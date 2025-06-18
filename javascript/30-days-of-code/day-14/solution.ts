// Problem Link -> https://www.hackerrank.com/challenges/30-scope/problem

// 30 Days Of Code
// Day 14 - Scope

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

class Difference {
  private _elements: number[];
  public maximumDifference: number;

  constructor(elements: number[]) {
    this._elements = elements;
    this.maximumDifference = 0;
  }

  computeDifference(): void {
    const minValue = Math.min(...this._elements);
    const maxValue = Math.max(...this._elements);
    this.maximumDifference = Math.abs(maxValue - minValue);
  }
}

function main() {
  // Read number of elements (not used directly but required for input format)
  const n: number = parseInt(readLine().trim());

  // Read the array of integers
  const a: number[] = readLine().split(" ").map(Number);

  const diff = new Difference(a);
  diff.computeDifference();
  console.log(diff.maximumDifference);
}
