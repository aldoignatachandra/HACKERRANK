// Solution to the 'Diagonal Difference' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}
