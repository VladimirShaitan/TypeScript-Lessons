"use strict";
function setColor(color) {
    console.log("Color set to: ".concat(color));
}
setColor("red");
function log(message, level) {
    console.log("[".concat(level.toUpperCase(), "] ").concat(message));
}
log("This is an info message", "info");
log("This is an error message", "error");
function makeRequest(method, url) {
    console.log("Making ".concat(method, " request to ").concat(url));
}
// makeRequest("GET", "https://api.example.com");
// makeRequest("PATCH", "https://api.example.com"); // Помилка: значення "PATCH" не входить до типу HTTPMethod
