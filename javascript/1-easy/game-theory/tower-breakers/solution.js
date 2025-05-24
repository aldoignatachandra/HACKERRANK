// Solution to the 'Tower Breakers' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/tower-breakers-1/problem

function towerBreakers(n, m) {
  if (m === 1) return 2;
  else if (n % 2 === 0) return 2;
  else return 1;
}
