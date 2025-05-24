// Solution to the 'Missing Numbers' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/missing-numbers/problem

function missingNumbers(arr, brr) {
  const freq = {};

  for (const x of brr) {
    freq[x] = (freq[x] || 0) + 1;
  }

  for (const x of arr) {
    freq[x]--;
  }

  return Object.entries(freq)
    .filter(([num, count]) => count > 0)
    .map(([num]) => Number(num))
    .sort((a, b) => a - b);
}
