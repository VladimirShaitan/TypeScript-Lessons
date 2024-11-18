abstract class Animal {
    abstract makeSound(): void; // Абстрактний метод
    move(): void {
        console.log('Moving...');
    }
}
//------------------------------------------------------
class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.makeSound(); // "Woof! Woof!"
dog.move(); // "Moving..."
//------------------------------------------------------
abstract class Transport {
    abstract move(): void;

    description(): void {
        console.log('This is a transport.');
    }
}

class Car extends Transport {
    move(): void {
        console.log('Car is driving...');
    }
}

class Airplane extends Transport {
    move(): void {
        console.log('Airplane is flying...');
    }
}

const car = new Car();
car.move(); // "Car is driving..."
car.description(); // "This is a transport."

const airplane = new Airplane();
airplane.move(); // "Airplane is flying..."
//------------------------------------------------------
interface Drawable {
    draw(): void;
}

class Circle implements Drawable {
    draw(): void {
        console.log('Drawing a circle...');
    }
}
//------------------------------------------------------
abstract class Shape {
    abstract draw(): void;

    describe(): void {
        console.log('This is a shape.');
    }
}

class Square extends Shape {
    draw(): void {
        console.log('Drawing a square...');
    }
}
