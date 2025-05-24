// Solution to the 'Breaking The Records' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let countHighest = 0;
  let countLowest = 0;
  let highest = scores[0];
  let lowest = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
      countHighest++;
      highest = scores[i];
    } else if (scores[i] < lowest) {
      countLowest++;
      lowest = scores[i];
    }
  }

  return [countHighest, countLowest];
}
