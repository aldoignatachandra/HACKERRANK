// SOLUTION
const modifyArray = (nums) => {
    return nums.map(n => n % 2 === 0 ? n * 2 : n * 3);
}

// TEST CASE
console.log(modifyArray([1,2,3,4,5]));