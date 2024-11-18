class MyClass {
    static staticProperty: string = 'I am static!';
}

console.log(MyClass.staticProperty); // "I am static!"
//------------------------------------------------------
// class MyClass {
//     static staticMethod(): void {
//         console.log('This is a static method.');
//     }
// }
//
// MyClass.staticMethod(); // "This is a static method."
//------------------------------------------------------
class Counter {
    static count: number = 0;

    constructor() {
        Counter.count++;
    }
}

new Counter();
new Counter();
console.log(Counter.count); // 2
//------------------------------------------------------
class Car {
    constructor(public brand: string, public model: string) {}

    static createToyota(model: string): Car {
        return new Car('Toyota', model);
    }
}

const camry = Car.createToyota('Camry');
console.log(camry); // Car { brand: 'Toyota', model: 'Camry' }
//------------------------------------------------------
class Validator {
    static isEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

console.log(Validator.isEmail('test@example.com')); // true
console.log(Validator.isEmail('invalid-email')); // false
//------------------------------------------------------
class IDGenerator {
    private static currentId: number = 0;

    static generateID(): number {
        return ++this.currentId;
    }
}

console.log(IDGenerator.generateID()); // 1
console.log(IDGenerator.generateID()); // 2
//------------------------------------------------------
class Parent {
    static greet(): void {
        console.log('Hello from Parent');
    }
}

class Child extends Parent {
    static greet(): void {
        console.log('Hello from Child');
    }
}

Parent.greet(); // "Hello from Parent"
Child.greet(); // "Hello from Child"
