// Solution to the 'Birthday Cake Candles' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  let tallest = 0;
  const maxCandles = Math.max(...candles);

  for (const num of candles) {
    if (num === maxCandles) tallest++;
  }

  return tallest;
}
