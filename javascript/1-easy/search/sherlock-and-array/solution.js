// Solution to the 'Sherlock and array' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/sherlock-and-array/problem

function balancedSums(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = total - leftSum - arr[i];
    if (leftSum === rightSum) return "YES";
    leftSum += arr[i];
  }

  return "NO";
}
