//SOLUTION
const getMaxLessThanK = (n, k) => {
    let max_anb = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b - 1; a > 0; a--) {
            if ((a & b) < k && (a & b) > max_anb){
                max_anb = (a & b);
            }
        }
    }
    return max_anb;
}

//TEST
console.log(getMaxLessThanK(5,2));
console.log(getMaxLessThanK(8,5));
console.log(getMaxLessThanK(2,2));