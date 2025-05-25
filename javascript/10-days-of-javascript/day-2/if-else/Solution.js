// SOLUTION
const getGrade = (score) => {
    return 'FEDCBA'[Math.trunc((score-1)/5)];
}

// TEST CASE
console.log(getGrade(11));