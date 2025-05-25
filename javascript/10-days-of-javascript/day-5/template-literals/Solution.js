// SOLUTION
const sides = (literals, ...expressions) => {
    var [A, P] = expressions;
    let constPart = Math.sqrt(P**2 - (16*A)) / 4;
    return [P/4 - constPart, P/4 + constPart];
}

// TEST CASE
console.log(sides("literals",[14,10]));