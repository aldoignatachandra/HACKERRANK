// Solution to the 'Minimum Absolute Difference In An Array' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Math.abs(arr[1] - arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
}
