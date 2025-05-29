// Solution to the 'Subarray Division' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let accumulate = 0;
    for (let j = 0; j < m; j++) {
      accumulate += s[i + j];
    }
    if (accumulate === d) count++;
  }

  return count;
}
