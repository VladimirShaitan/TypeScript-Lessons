type Name = { name: string };
type Age = { age: number };

type User = Name & Age; // { name: string; age: number }


// interface Name {
//     name: string;
// }
// interface Age {
//     age: number;
// }
//
// interface User extends Name, Age {} // { name: string; age: number }


// interface User {
//     name: string;
// }
//
// interface User {
//     age: number;
// }
//
// // User = { name: string; age: number }


// type User = {
//     name: string;
// };
//
// type User = { // Error: Duplicate identifier 'User'
//     age: number;
// };


// type Response = "success" | "error"; // Літеральний тип
// type ID = number | string; // Об'єднання типів


interface Status { // Error: Interface can only extend an object type
    success: "success" | "error"; // Не можна створити літеральний тип
}

interface Add {
    (a: number, b: number): number;
}
const add: Add = (a, b) => a + b;


// type Add = (a: number, b: number) => number;
// const add: Add = (a, b) => a + b;