// Приклад 1:

interface Animal {
    name: string;
}

interface Dog extends Animal {
    bark: () => void;
}

const dog: Dog = {
    name: "Buddy",
    bark: () => console.log("Woof!"),
};

dog.bark(); // "Woof!"


/*-----------------------------------------------------------------
Приклад 2: Розширення з використанням кількох інтерфейсів
 -----------------------------------------------------------------*/
interface Vehicle {
    wheels: number;
}

interface Electric {
    battery: number;
}

interface ElectricCar extends Vehicle, Electric {
    charge: () => void;
}

const tesla: ElectricCar = {
    wheels: 4,
    battery: 100,
    charge: () => console.log("Charging..."),
};

tesla.charge(); // "Charging..."


/*-----------------------------------------------------------------
Приклад 3: Розширення інтерфейсів з полями за замовчуванням
 -----------------------------------------------------------------*/
interface User {
    username: string;
    password: string;
}

interface Admin extends User {
    adminPrivileges: string[];
}

const adminUser: Admin = {
    username: "admin",
    password: "securepassword",
    adminPrivileges: ["manage_users", "view_reports"],
};
