"use strict";
// Приклад 1:
function formatValue(value) {
    return "Formatted value: ".concat(value);
}
console.log(formatValue(123)); // "Formatted value: 123"
console.log(formatValue("Hello")); // "Formatted value: Hello"
var shapes = [
    { type: "circle", size: 10 },
    { type: "square", size: 20 },
];
shapes.forEach(function (shape) {
    if (shape.type === "circle") {
        console.log("Circle with size: ".concat(shape.size));
    }
    else {
        console.log("Square with size: ".concat(shape.size));
    }
});
function print(value) {
    console.log(value);
}
print(123);
print("abc");
