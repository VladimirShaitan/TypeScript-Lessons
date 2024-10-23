// Приклад 1: Простий тип функції

interface AddFunction {
    (a: number, b: number): number;
}

// Реалізація функції, що відповідає типу AddFunction
const add: AddFunction = (x, y) => x + y;

console.log(add(5, 10)); // 15


/*-----------------------------------------------------------------
Приклад 2: Функція з об’єктом як параметром
 -----------------------------------------------------------------*/
interface User {
    username: string;
    age: number;
}

interface UserFunction {
    (user: User): void;
}

const printUser: UserFunction = (user) => {
    console.log(`Username: ${user.username}, Age: ${user.age}`);
};

const user1: User = { username: "john_doe", age: 25 };
printUser(user1); // Username: john_doe, Age: 25


/*-----------------------------------------------------------------
Приклад 3: Функція з кількома сигнатурами
 -----------------------------------------------------------------*/
interface OverloadedFunction {
    (a: string): string;
    (a: number, b: number): number;
}

const exampleFunction: OverloadedFunction = (a: any, b?: any) => {
    if (typeof a === "string") {
        return `Hello, ${a}`;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return null;
};

console.log(exampleFunction("John")); // Hello, John
console.log(exampleFunction(5, 10)); // 15


/*-----------------------------------------------------------------
Приклад 4: Використання функцій як колбеків
 -----------------------------------------------------------------*/
interface CallbackFunction {
    (result: number): void;
}

function performOperation(a: number, b: number, callback: CallbackFunction) {
    const result = a + b;
    callback(result);
}

performOperation(5, 10, (result) => {
    console.log(`Result: ${result}`); // Result: 15
});


/*-----------------------------------------------------------------
Приклад 5: Функція з необов’язковими параметрами
 -----------------------------------------------------------------*/
interface Logger {
    (message: string, severity?: string): void;
}

const log: Logger = (message, severity = "info") => {
    console.log(`[${severity.toUpperCase()}]: ${message}`);
};

log("System started"); // [INFO]: System started
log("Error occurred", "error"); // [ERROR]: Error occurred