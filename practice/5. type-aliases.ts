// Приклад 1:

type StringOrNumber = string | number;

function printValue(value: StringOrNumber) {
    console.log(value);
}

printValue("Hello");
printValue(123);


/*-----------------------------------------------------------------
Приклад 2: Використання псевдонімів типів для складних структур
 -----------------------------------------------------------------*/
type User = {
    id: number;
    name: string;
};

type Admin = User & {
    permissions: string[];
};

const admin: Admin = {
    id: 1,
    name: "Alice",
    permissions: ["read", "write", "delete"],
};


/*-----------------------------------------------------------------
Приклад 3: Псевдоніми типів з функціями
 -----------------------------------------------------------------*/
type Operation = (...args: number[]) => number;

const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2