// Solution to the 'Camel Case' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  let countWords = 1;

  for (const str of s) {
    if (/[A-Z]/.test(str)) {
      countWords++;
    }
  }

  return countWords;
}
