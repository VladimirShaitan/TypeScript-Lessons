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