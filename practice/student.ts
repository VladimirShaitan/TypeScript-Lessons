type Student = { name: string; age: number };



function getAdultStudents(students: Student[]): string[] {
    return students
        .filter((student) => student.age > 18)
        .map((student) => student.name);
}

let students = [
    { name: "John", age: 17 },
    { name: "Alice", age: 20 },
    { name: "Bob", age: 19 },
];

console.log(getAdultStudents(students)); // ["Alice", "Bob"]
