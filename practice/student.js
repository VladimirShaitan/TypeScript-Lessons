"use strict";
function getAdultStudents(students) {
    return students
        .filter(function (student) { return student.age > 18; })
        .map(function (student) { return student.name; });
}
var students = [
    { name: "John", age: 17 },
    { name: "Alice", age: 20 },
    { name: "Bob", age: 19 },
];
console.log(getAdultStudents(students)); // ["Alice", "Bob"]
