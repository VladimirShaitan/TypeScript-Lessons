interface User {
    name: string;
    age: number;
}

function updateUser(id: number, newUserData: Partial<User>) {
    // оновлення користувача
}

updateUser(1, { name: "Alice" }); // допустимо лише з `name`, оскільки `age` необов’язковий
// -------------------------------------------------------

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = { id: 1, name: "Alice" }; // лише `id` та `name`
// -------------------------------------------------------

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

type SensitiveUserInfo = Omit<User, "email">;

const userInfo: SensitiveUserInfo = { id: 1, name: "Alice", age: 30 };
// -------------------------------------------------------

interface Settings {
    theme?: string;
    notificationsEnabled?: boolean;
}

function initializeSettings(settings: Required<Settings>) {
    // налаштування завжди міститимуть `theme` та `notificationsEnabled`
}

initializeSettings({ theme: "dark", notificationsEnabled: true }); // всі поля обов'язкові
// -------------------------------------------------------

interface UserProfile {
    name: string;
    age: number;
}

const profile: Readonly<UserProfile> = { name: "Alice", age: 25 };

// profile.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// -------------------------------------------------------

// type Roles = "admin" | "user" | "guest";
// type Permissions = "read" | "write" | "delete";
//
// const rolePermissions: Record<Roles, Permissions[]> = {
//     admin: ["read", "write", "delete"],
//     user: ["read", "write"],
//     guest: ["read"],
// };
// -------------------------------------------------------

type Status = "loading" | "success" | "error";
type SuccessStatus = "success" | "error";

type ExtractedStatus = Extract<Status, SuccessStatus>; // "success" | "error"