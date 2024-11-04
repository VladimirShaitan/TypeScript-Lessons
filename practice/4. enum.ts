enum UserRole {
    Admin = "admin",
    User = "user",
    Guest = "guest",
}
// ------------------------------------------------

function getUserPermissions(role: UserRole): string[] {
    switch (role) {
        case UserRole.Admin:
            return ["read", "write", "delete"];
        case UserRole.User:
            return ["read", "write"];
        case UserRole.Guest:
            return ["read"];
        default:
            return [];
    }
}

const adminPermissions = getUserPermissions(UserRole.Admin); // ["read", "write", "delete"]
// ------------------------------------------------


function performAction(status: UserRole): void {
    if (status === UserRole.Admin) {
        console.log("Admin actions are available.");
    } else if (status === UserRole.User) {
        console.log("User actions are available.");
    } else {
        console.log("Guest actions are limited.");
    }
}

performAction(UserRole.Guest); // "Guest actions are limited."
// performAction("other"); // Error: Argument of type '"other"' is not assignable to parameter of type 'UserRole'
// ------------------------------------------------


enum OrderStatus {
    Pending = 1,
    Shipped,
    Delivered,
    Cancelled,
}
function updateOrderStatus(status: OrderStatus) {
    if (status === OrderStatus.Pending) {
        console.log("Order is pending.");
    } else if (status === OrderStatus.Shipped) {
        console.log("Order has been shipped.");
    }
}

updateOrderStatus(OrderStatus.Shipped); // "Order has been shipped."
// ------------------------------------------------


enum TaskStatus {
    NotStarted = "not_started",
    InProgress = "in_progress",
    Completed = "completed",
}

interface Task {
    id: number;
    name: string;
    status: TaskStatus;
}

const tasks: Task[] = [
    { id: 1, name: "Task 1", status: TaskStatus.NotStarted },
    { id: 2, name: "Task 2", status: TaskStatus.InProgress },
];

function filterTasksByStatus(tasks: Task[], status: TaskStatus): Task[] {
    return tasks.filter((task) => task.status === status);
}

const inProgressTasks = filterTasksByStatus(tasks, TaskStatus.InProgress);
console.log(inProgressTasks); // [{ id: 2, name: "Task 2", status: "in_progress" }]
// ------------------------------------------------


enum MixedEnum {
    A = 1,       // Числове значення
    B = "value", // Рядкове значення
    C = 2,       // Помилка: Enum member must have initializer
}
// ------------------------------------------------


// enum MixedEnum {
//     A = 1,
//     B = "value",
//     C = 3, // Вказуємо явне значення
// }
// ------------------------------------------------


enum StatusCode {
    Success = 200,
    Redirect,        // 201
    BadRequest = 400,
    Unauthorized,    // 401
}
// ------------------------------------------------


// enum StatusCode {
//     Success = 200,
//     Redirect = 301,  // Ручне встановлення значення
//     BadRequest = 400,
//     Unauthorized = 401,
// }
// ------------------------------------------------

// ------------------------------------------------ДОДАТКОВО


enum FileAccess {
    Read = 1 << 0,  // 1
    Write = 1 << 1, // 2
    Execute = 1 << 2, // 4
    Delete = 1 << 3, // 8
}

function checkPermissions(permission: number) {
    if (permission & FileAccess.Read) {
        console.log("Read permission granted");
    }
    if (permission & FileAccess.Write) {
        console.log("Write permission granted");
    }
}

const permission = FileAccess.Read | FileAccess.Write;
checkPermissions(permission);
// Виведе:
// "Read permission granted"
// "Write permission granted"
// ------------------------------------------------


enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
// ------------------------------------------------


enum Status {
    Active = 1,
    Inactive,
    Paused,
}

function logStatus(status: Status) {
    if (status === Status.Active) {
        console.log("Active");
    } else if (status === Status.Inactive) {
        console.log("Inactive");
    } else if (status === Status.Paused) {
        console.log("Paused");
    } else {
        console.log("Unknown status"); // це може трапитися, якщо передати невалідне значення
    }
}

// logStatus(10); // "Unknown status"
// ------------------------------------------------


enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

type DirectionType = keyof typeof Direction;

function move(direction: DirectionType) {
    console.log(`Moving ${Direction[direction]}`);
}

move("Up"); // працює
// move("Diagonal"); // Помилка: Argument of type '"Diagonal"' is not assignable to parameter of type 'DirectionType'