//SOLUTION
const reverseString = (s) => {
    try {
        s = s.split("").reverse().join("");
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}

//TEST
reverseString("1234");
reverseString(Number("1234"));