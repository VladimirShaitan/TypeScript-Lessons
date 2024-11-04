function identity<T>(value: T): T {
    return value;
}

const numberIdentity = identity(10); // T = number
const stringIdentity = identity("Hello"); // T = string

// --------------------------------------------------
function getFirstElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

const firstNumber = getFirstElement([1, 2, 3]); // T = number
const firstString = getFirstElement(["a", "b", "c"]); // T = string
// --------------------------------------------------

// interface Person {
//     name: string;
//     age: number;
// }
//
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
//
// const person: Person = { name: "Alice", age: 25 };
// const name = getProperty(person, "name"); // T = Person, K = "name" (result: string)
// const age = getProperty(person, "age"); // T = Person, K = "age" (result: number)
// --------------------------------------------------

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2 (тип number)

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.pop()); // "b" (тип string)