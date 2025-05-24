//SOLUTION
const getArea = (length, width) => {
    return length * width;
}

const getPerimeter = (length, width) => {
    return 2 * (length + width);
}

//TEST
console.log(getArea(3, 4.5));
console.log(getPerimeter(3, 4.5));