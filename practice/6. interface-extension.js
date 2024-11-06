"use strict";
// Приклад 1:
var dog = {
    name: "Buddy",
    bark: function () { return console.log("Woof!"); },
};
dog.bark(); // "Woof!"
var tesla = {
    wheels: 4,
    battery: 100,
    charge: function () { return console.log("Charging..."); },
};
tesla.charge(); // "Charging..."
var adminUser = {
    username: "admin",
    password: "securepassword",
    adminPrivileges: ["manage_users", "view_reports"],
};
