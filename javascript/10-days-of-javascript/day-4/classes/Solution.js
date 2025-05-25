// SOLUTION
class Polygon {
    constructor(sides) {        
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce(function add(a,b) { return a + b });
    } 
}

// TEST CASE
let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());