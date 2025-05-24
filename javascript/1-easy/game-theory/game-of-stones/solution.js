// Solution to the 'Game Of Stones' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/game-of-stones-1/problem

function gameOfStones(n) {
  if (n % 7 === 0 || n % 7 === 1) {
    return "Second";
  } else {
    return "First";
  }
}
