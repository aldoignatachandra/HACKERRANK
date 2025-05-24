//SOLUTION
const regexVar = (word) => {
    let re = /\d+/g

    //Check Incoming String 
    const r = word.match(re);
    
    //Print Result
    for (const e of r) {
        console.log (e);
    }
}

//TEST
regexVar("102, 1948948 and 1.3 and 4.5");