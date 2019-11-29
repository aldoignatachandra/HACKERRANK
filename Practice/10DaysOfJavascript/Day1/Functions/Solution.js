//SOLUTION
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

//TEST
console.log(factorial(4));