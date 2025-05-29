// Solution to the 'Apple And Orange' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let totalApples = 0;
  let totalOranges = 0;

  for (const apple of apples) {
    const pos = apple + a;
    if (pos >= s && pos <= t) totalApples++;
  }

  for (const orange of oranges) {
    const pos = orange + b;
    if (pos >= s && pos <= t) totalOranges++;
  }

  console.log(totalApples);
  console.log(totalOranges);
}
