class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const john = new Person('John', 30);
console.log(john); // { name: 'John', age: 30 }
//------------------------------------------------------
class Greeter {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet(): void {
        console.log(this.greeting);
    }
}

const greeter = new Greeter('Hello, world!');
greeter.greet(); // "Hello, world!"