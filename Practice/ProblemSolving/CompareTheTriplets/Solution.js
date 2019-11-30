//SOLUTION
const compareTriplets = (a, b) => {
    let pointAlice = ((a[0] > b[0]) ? 1 : 0) + ((a[1] > b[1]) ? 1 : 0) + ((a[2] > b[2]) ? 1 : 0);
    let pointBob = ((b[0] > a[0]) ? 1 : 0) + ((b[1] > a[1]) ? 1 : 0) + (( b[2] > a[2]) ? 1 : 0);
    return [pointAlice, pointBob];
}

//TEST
console.log(compareTriplets([17,28,30],[99,16,8]));