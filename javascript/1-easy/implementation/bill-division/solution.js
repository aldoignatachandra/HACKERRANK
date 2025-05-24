// Solution to the 'Bill Division' problem from HackerRank
// Problem Link: https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  const skipIndex = k;
  const initCost = b;
  let cost = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== skipIndex) cost += bill[i];
  }

  cost = cost / 2;

  console.log(cost === initCost ? "Bon Appetit" : initCost - cost);
}
