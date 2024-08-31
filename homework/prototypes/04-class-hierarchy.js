// 4. Class Hierarchy
// Write a function that returns three classes: Figure, Circle, and Rectangle. Figure has a
// units property (default &quot;cm&quot;), a getter area, and methods changeUnits and toString.
// Circle and Rectangle extend Figure and override area and toString appropriately.

class Figure {
    constructor(units = 'cm') {
        this.units = units;
    }

    get area() {

    }

    toString() {

    }
}

class Rectangle extends Figure {
    constructor(height, width = height, units = 'cm') {
        super(units);
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    toString() {
        return `Rectangle with width: ${this.width} ${this.units}, height: ${this.height} ${this.units} and area: ${this.area.toFixed(2)} ${this.units}²`;
    }
}

class Circle extends Figure{
    constructor(radius, units = 'cm') {
        super(units);
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    toString() {
        return `Circle with radius: ${this.radius} ${this.units} and area: ${this.area.toFixed(2)} ${this.units}²`;
    }
}

const circle = new Circle(20);
console.log(circle.toString());

const rectangle = new Rectangle(40);
console.log(rectangle.toString());
