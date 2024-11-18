class Point {
    x: number;
    y: number;
}

const point = new Point();
point.x = 10;
point.y = 20;
console.log(point); // { x: 10, y: 20 }
//------------------------------------------------------
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const john = new Person('John', 25);
john.greet(); // "Hi, my name is John and I'm 25 years old."
//------------------------------------------------------
class Animal {}
class Dog extends Animal {}

const dog = new Dog();
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true