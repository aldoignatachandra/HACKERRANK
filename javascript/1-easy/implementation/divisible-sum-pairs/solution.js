// Solution to the 'Divisible Sum Pairs' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let pair = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) pair++;
    }
  }

  return pair;
}
