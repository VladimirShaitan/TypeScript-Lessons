"use strict";
// Приклад 1:
function printValue(value) {
    console.log(value);
}
printValue("Hello");
printValue(123);
var admin = {
    id: 1,
    name: "Alice",
    permissions: ["read", "write", "delete"],
};
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
