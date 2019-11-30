//SOLUTION
const simpleArraySum = (ar) => {
    return ar.reduce((a,b) => a + b );
}

//TEST
console.log(simpleArraySum([1,2,3,4,10,11]));