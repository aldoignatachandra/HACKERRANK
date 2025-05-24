// Solution to the 'Grid Challenge' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/grid-challenge/problem

function gridChallenge(grid) {
  const sortedGrid = grid.map((row) => row.split("").sort().join(""));

  for (let col = 0; col < sortedGrid[0].length; col++) {
    for (let row = 1; row < sortedGrid.length; row++) {
      if (sortedGrid[row][col] < sortedGrid[row - 1][col]) {
        return "NO";
      }
    }
  }

  return "YES";
}
