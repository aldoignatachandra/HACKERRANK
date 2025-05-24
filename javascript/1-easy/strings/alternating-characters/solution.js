// Solution to the 'Alternationg Characters' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(str) {
  let deleteStr = [];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) deleteStr.push(str[i]);
  }

  return deleteStr.length;
}
