// SOLUTION
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

// TEST CASE
console.log(factorial(4));