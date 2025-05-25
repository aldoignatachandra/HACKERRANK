// SOLUTION
const getDayName = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-Us', options).format(date);
}

// TEST CASE
console.log(getDayName("11/29/2019"));
console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));