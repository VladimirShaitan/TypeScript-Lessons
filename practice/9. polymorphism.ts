abstract class Shape {
    abstract calculateArea(): number;
}

class Square extends Shape {
    side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    calculateArea(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}