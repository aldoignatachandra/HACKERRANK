// Solution to the 'The Love Letter Mystery' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

function theLoveLetterMystery(str) {
  let count = 0;
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    count += Math.abs(str.charCodeAt(i) - str.charCodeAt(j));
    i++;
    j--;
  }

  return count;
}
