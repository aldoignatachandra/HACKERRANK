// Solution to the 'Number Line Jumps' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) return "NO";
  return (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}
