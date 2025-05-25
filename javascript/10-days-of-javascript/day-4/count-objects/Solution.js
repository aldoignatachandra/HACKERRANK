// SOLUTION
const getCount = (objects) => {
    return objects.filter(item => item.x === item.y).length
}

// TEST CASE
console.log(getCount(
    [
        {x:1, y:1},
        {x:2, y:3},
        {x:3, y:3}, 
        {x:3, y:4},
        {x:4, y:5}
    ]
));