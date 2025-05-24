// Solution to the 'Find Digits' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
  const str = n.toString();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    const num = Number(str[i]);
    if (num && n % num === 0) counter++;
  }

  return counter;
}
