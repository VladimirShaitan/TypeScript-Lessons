"use strict";
// Приклад 1:
var user = {
    username: "john_doe",
    email: "john@example.com",
    street: "123 Main St",
    city: "New York",
};
console.log(user);
var example = {
    common: "Hello",
    commonB: 42,
};
console.log(example);
var order = {
    orderId: 1,
    items: ["item1", "item2"],
    amount: 150,
    currency: "USD",
    orderDate: new Date(),
};
console.log(order);
function printStaffInfo(staff) {
    console.log("Username: ".concat(staff.username, ", ID: ").concat(staff.employeeId, ", Role: ").concat(staff.role));
}
var staffMember = {
    username: "jane_doe",
    employeeId: 12345,
    role: "Manager",
};
printStaffInfo(staffMember); // Username: jane_doe, ID: 12345, Role: Manager
var fleet = {
    wheels: 4,
    doors: 4,
    capacity: 1000,
    fleetName: "Delivery Fleet",
};
console.log(fleet);
