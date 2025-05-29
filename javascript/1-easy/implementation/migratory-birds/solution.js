// Solution to the 'Migratory Birds' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
  const birdTypes = {};

  for (const type of arr) {
    birdTypes[type] = (birdTypes[type] || 0) + 1;
  }

  let resultType = Infinity;
  let maxCount = 0;

  for (const type in birdTypes) {
    const count = birdTypes[type];
    const numType = Number(type);
    if (count > maxCount || (count === maxCount && numType < resultType)) {
      maxCount = count;
      resultType = numType;
    }
  }

  return resultType;
}
