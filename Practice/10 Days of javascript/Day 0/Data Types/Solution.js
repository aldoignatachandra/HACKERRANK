//SOLUTION
const performOperation = (secondInteger, secondDecimal, secondString) => {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    let sumInt = Number(firstInteger) + Number(secondInteger);
    console.log(sumInt);
    let sumDec = Number(firstDecimal) + Number(secondDecimal);    
    console.log(sumDec);
    
    console.log(firstString + secondString);
}

//TEST
performOperation(12, 4.32, "is the best place to learn and practice coding!");