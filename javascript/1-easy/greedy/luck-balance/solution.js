// Solution to the 'Luck Balance' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
  let totalLuck = 0;
  let importantContests = [];

  // Sum luck for non-important contests and collect important contests
  for (let i = 0; i < contests.length; i++) {
    const [luck, importance] = contests[i];
    if (importance === 0) totalLuck += luck;
    else importantContests.push(luck);
  }

  // Sort important contests in descending order
  importantContests.sort((a, b) => b - a);

  // Lose the k most lucky important contests and win the rest
  for (let i = 0; i < importantContests.length; i++) {
    if (i < k) totalLuck += importantContests[i];
    else totalLuck -= importantContests[i];
  }

  return totalLuck;
}
