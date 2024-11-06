"use strict";
// Приклад 1: Простий тип функції
// Реалізація функції, що відповідає типу AddFunction
var add = function (x, y) { return x + y; };
console.log(add(5, 10)); // 15
var printUser = function (user) {
    console.log("Username: ".concat(user.username, ", Age: ").concat(user.age));
};
var user1 = { username: "john_doe", age: 25 };
printUser(user1); // Username: john_doe, Age: 25
var exampleFunction = function (a, b) {
    if (typeof a === "string") {
        return "Hello, ".concat(a);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return null;
};
console.log(exampleFunction("John")); // Hello, John
console.log(exampleFunction(5, 10)); // 15
function performOperation(a, b, callback) {
    var result = a + b;
    callback(result);
}
performOperation(5, 10, function (result) {
    console.log("Result: ".concat(result)); // Result: 15
});
var log = function (message, severity) {
    if (severity === void 0) { severity = "info"; }
    console.log("[".concat(severity.toUpperCase(), "]: ").concat(message));
};
log("System started"); // [INFO]: System started
log("Error occurred", "error"); // [ERROR]: Error occurred
