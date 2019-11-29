//SOLUTION
const getGrade = (score) => {
    return 'FEDCBA'[Math.trunc((score-1)/5)];
}

//TEST
console.log(getGrade(11));