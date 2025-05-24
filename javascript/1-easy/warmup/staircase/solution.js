// Solution to the 'Staircase' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}
