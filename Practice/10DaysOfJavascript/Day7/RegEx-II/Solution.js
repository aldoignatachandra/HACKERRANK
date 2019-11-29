//SOLUTION
const regexVar = (word) => {
    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/

    //Check Incoming String 
    return word.match(re) === null ? false : true;
}

//TEST
console.log(regexVar("Mrs.Y"));
console.log(regexVar("Dr#Joseph"));
console.log(regexVar("Er .Abc"));