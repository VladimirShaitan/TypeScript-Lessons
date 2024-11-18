class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const dog = new Animal('Buddy');
console.log(dog.name); // "Buddy"
//------------------------------------------------------
// class PrivateExample {
//     #privateMethod(): void {
//         console.log('This is a private method');
//     }
//
//     publicMethod(): void {
//         this.#privateMethod();
//     }
// }
//
// const example = new PrivateExample();
// example.publicMethod(); // "This is a private method"
// // example.#privateMethod(); // Помилка!
//------------------------------------------------------
// class Account {
//     private balance: number;
//
//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
//     }
//
//     deposit(amount: number): void {
//         this.balance += amount;
//     }
//
//     getBalance(): number {
//         return this.balance;
//     }
// }
//
// const myAccount = new Account(100);
// myAccount.deposit(50);
// console.log(myAccount.getBalance()); // 150
//------------------------------------------------------
// class SecureAccount {
//     private _balance: number;
//
//     constructor(initialBalance: number) {
//         this._balance = initialBalance > 0 ? initialBalance : 0;
//     }
//
//     deposit(amount: number): void {
//         if (amount > 0) {
//             this._balance += amount;
//         } else {
//             console.log('Deposit must be positive.');
//         }
//     }
//
//     get balance(): number {
//         return this._balance;
//     }
// }
//------------------------------------------------------
// class Person {
//     protected ssn: string;
//
//     constructor(ssn: string) {
//         this.ssn = ssn;
//     }
// }
//
// class Employee extends Person {
//     getSSN(): string {
//         return this.ssn;
//     }
// }
//
// const employee = new Employee('123-45-6789');
// console.log(employee.getSSN()); // "123-45-6789"
//------------------------------------------------------
// class Counter {
//     private count: number = 0;
//     increment(): void {
//         this.count++;
//     }
//     getCount(): number {
//         return this.count;
//     }
// }
//------------------------------------------------------
// class Shape {
//     protected sides: number;
//
//     constructor(sides: number) {
//         this.sides = sides;
//     }
// }
//
// class Triangle extends Shape {
//     getSides(): number {
//         return this.sides;
//     }
// }
// const triangle = new Triangle(3);
// console.log(triangle.getSides()); // 3