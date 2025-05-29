// Solution to the 'Between Two Sets' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  let count = 0;

  for (let x = maxA; x <= minB; x++) {
    if (a.every((num) => x % num === 0) && b.every((num) => num % x === 0)) {
      count++;
    }
  }

  return count;
}
