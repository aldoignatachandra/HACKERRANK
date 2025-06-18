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

function minimum_index(seq: number[]): number {
  if (seq.length === 0) {
    throw new Error("Cannot get the minimum value index from an empty sequence");
  }
  let min_idx = 0;
  for (let i = 1; i < seq.length; ++i) {
    if (seq[i] < seq[min_idx]) {
      min_idx = i;
    }
  }
  return min_idx;
}

class TestDataEmptyArray {
  static get_array(): number[] {
    // Return an empty array
    return [];
  }
}

class TestDataUniqueValues {
  static get_array(): number[] {
    // Return an array of size at least 2 with all unique elements
    return [5, 1, 2, 3, 4];
  }

  static get_expected_result(): number {
    // Return the expected minimum value index for this array
    return 1; // Index of value 1, which is the minimum
  }
}

class TestDataExactlyTwoDifferentMinimums {
  static get_array(): number[] {
    // Return an array where the minimum value occurs at exactly 2 indices
    return [1, 3, 1, 2];
  }

  static get_expected_result(): number {
    // Return the expected index (the smallest one)
    return 0; // First occurrence of the minimum value 1
  }
}

function TestWithEmptyArray(): void {
  try {
    const seq = TestDataEmptyArray.get_array();
    const result = minimum_index(seq);
  } catch (e) {
    return;
  }
  throw new Error("Exception wasn't thrown as expected");
}

function TestWithUniqueValues(): void {
  const seq = TestDataUniqueValues.get_array();
  if (seq.length < 2) {
    throw new Error("less than 2 elements in the array");
  }

  const tmp = [...seq];
  if (new Set(tmp).size !== seq.length) {
    throw new Error("not all values are unique");
  }

  const expected_result = TestDataUniqueValues.get_expected_result();
  const result = minimum_index(seq);
  if (result !== expected_result) {
    throw new Error("result is different than the expected result");
  }
}

function TestWithExactlyTwoDifferentMinimums(): void {
  const seq = TestDataExactlyTwoDifferentMinimums.get_array();
  if (seq.length < 2) {
    throw new Error("less than 2 elements in the array");
  }

  const tmp = [...seq].sort((a, b) => a - b);
  if (!(tmp[0] === tmp[1] && (tmp.length === 2 || tmp[1] < tmp[2]))) {
    throw new Error("there are not exactly two minimums in the array");
  }

  const expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result();
  const result = minimum_index(seq);
  if (result !== expected_result) {
    throw new Error("result is different than the expected result");
  }
}

function main() {
  // For this specific problem, we need to run the tests instead of processing input
  TestWithEmptyArray();
  TestWithUniqueValues();
  TestWithExactlyTwoDifferentMinimums();
  console.log("OK");
  
  // The original input processing code is not needed for this problem
  // If you need to keep it for reference, comment it out like below:
  /*
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const firstMultipleInput: string[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ");

    const n: number = parseInt(firstMultipleInput[0], 10);

    const k: number = parseInt(firstMultipleInput[1], 10);

    const a: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((aTemp) => parseInt(aTemp, 10));
  }
  */
}
