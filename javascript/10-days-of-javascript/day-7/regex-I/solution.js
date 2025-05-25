// SOLUTION
const regexVar = (word) => {
    let re = /^([aeiou]).+\1$/;

    //Check Incoming String 
    return word.match(re) === null ? false : true;
}

// TEST CASE
console.log(regexVar("abcd"));
console.log(regexVar("abcda"));
console.log(regexVar("abcdo"));