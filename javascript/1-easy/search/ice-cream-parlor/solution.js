// Solution to the 'Icecream Parlor' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
  const target = m;
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      return [seen.get(complement) + 1, i + 1];
    }
    seen.set(arr[i], i);
  }
}
