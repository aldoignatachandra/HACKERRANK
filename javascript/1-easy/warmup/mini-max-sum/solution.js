// Solution to the 'Min-Max Sum' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  let sum = 0;

  arr = arr.sort();
  for (const num of arr) {
    sum += num;
  }

  const minSum = sum - arr[arr.length - 1];
  const maxSum = sum - arr[0];

  console.log(`${minSum} ${maxSum}`);
}
