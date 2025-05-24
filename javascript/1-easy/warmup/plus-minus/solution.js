// Solution to the 'Plus Minus' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach((num) => {
    if (num > 0) positiveCount++;
    else if (num < 0) negativeCount++;
    else zeroCount++;
  });

  const totalCount = arr.length;

  console.log((positiveCount / totalCount).toFixed(6));
  console.log((negativeCount / totalCount).toFixed(6));
  console.log((zeroCount / totalCount).toFixed(6));
}
