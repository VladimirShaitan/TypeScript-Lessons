// Приклад 1:

interface Contact {
    email: string;
}

interface Address {
    street: string;
    city: string;
}

// Об'єднуємо інтерфейси Contact та Address
interface UserProfile extends Contact, Address {
    username: string;
}

const user: UserProfile = {
    username: "john_doe",
    email: "john@example.com",
    street: "123 Main St",
    city: "New York",
};

console.log(user);


/*-----------------------------------------------------------------
Приклад 2: Об’єднання інтерфейсів з однаковими властивостями
 -----------------------------------------------------------------*/
interface A {
    common: string;
}

interface B {
    common: number; // Тут тип "number", який конфліктує з "string" в інтерфейсі A
}

// Помилка при об'єднанні: дві властивості з однаковим ім'ям, але різними типами
// interface C extends A, B {} // Помилка

// Замість цього, можна створити об'єднання, яке не використовує спільну назву
interface C extends A {
    commonB: number; // Додаємо унікальну властивість
}

const example: C = {
    common: "Hello",
    commonB: 42,
};

console.log(example);


/*-----------------------------------------------------------------
Приклад 3: Об’єднання кількох інтерфейсів
 -----------------------------------------------------------------*/
interface Payment {
    amount: number;
    currency: string;
}

interface Order {
    orderId: number;
    items: string[];
}

// Об’єднуємо Payment та Order
interface CompleteOrder extends Payment, Order {
    orderDate: Date;
}

const order: CompleteOrder = {
    orderId: 1,
    items: ["item1", "item2"],
    amount: 150,
    currency: "USD",
    orderDate: new Date(),
};

console.log(order);


/*-----------------------------------------------------------------
Приклад 4: Використання об’єднання в функціях
 -----------------------------------------------------------------*/
interface User {
    username: string;
}

interface Employee {
    employeeId: number;
}

// Об'єднуємо User та Employee
interface Staff extends User, Employee {
    role: string;
}

function printStaffInfo(staff: Staff) {
    console.log(`Username: ${staff.username}, ID: ${staff.employeeId}, Role: ${staff.role}`);
}

const staffMember: Staff = {
    username: "jane_doe",
    employeeId: 12345,
    role: "Manager",
};

printStaffInfo(staffMember); // Username: jane_doe, ID: 12345, Role: Manager


/*-----------------------------------------------------------------
Приклад 5: Використання об’єднання з функціями
 -----------------------------------------------------------------*/
interface Vehicle {
    wheels: number;
}

interface Car extends Vehicle {
    doors: number;
}

interface Truck extends Vehicle {
    capacity: number;
}

// Об’єднуємо Car та Truck
interface Fleet extends Car, Truck {
    fleetName: string;
}

const fleet: Fleet = {
    wheels: 4,
    doors: 4,
    capacity: 1000,
    fleetName: "Delivery Fleet",
};

console.log(fleet);