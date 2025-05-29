// Solution to the 'Forming A Magic Square' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;

  for (let i = 0; i < magicSquares.length; i++) {
    let cost = 0;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        cost += Math.abs(s[r][c] - magicSquares[i][r][c]);
      }
    }

    if (cost < minCost) minCost = cost;
  }

  return minCost;
}
