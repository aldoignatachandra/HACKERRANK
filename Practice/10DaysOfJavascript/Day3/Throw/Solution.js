//SOLUTION
const isPositive = (a) => {
    if (a > 0) { return "YES" };
    throw Error (a < 0 ? "Negative Error" : "Zero Error");
}

//TEST
console.log(isPositive(2));
console.log(isPositive(0));     //Throw Error in console (Zero Error)
console.log(isPositive(6));
console.log(isPositive(-1));    //Throw Error in console (Negative Error)