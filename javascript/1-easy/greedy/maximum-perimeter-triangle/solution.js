// Solution to the 'Maximum Perimeter Triangle' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => a - b);

  for (let i = sticks.length - 3; i >= 0; i--) {
    // For three consecutive elements a, b, c (sticks[i], sticks[i+1], sticks[i+2]),
    // check the triangle inequality condition: a + b > c.
    if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
      // Since the array is sorted,
      // the three sticks form a valid triangle and are already in non-decreasing order.
      return [sticks[i], sticks[i + 1], sticks[i + 2]];
    }
  }

  return [-1];
}
