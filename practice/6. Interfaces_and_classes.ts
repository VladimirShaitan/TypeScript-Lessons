interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}
//------------------------------------------------------
// interface User {
//     id: number;
//     name: string;
//     email: string;
// }
//
// class UserService {
//     private users: User[] = [];
//
//     addUser(user: User): void {
//         this.users.push(user);
//     }
//
//     getUserById(id: number): User | undefined {
//         return this.users.find(user => user.id === id);
//     }
// }
//
// const userService = new UserService();
// userService.addUser({ id: 1, name: 'Alice', email: 'alice@example.com' });
//
// console.log(userService.getUserById(1)); // { id: 1, name: 'Alice', email: 'alice@example.com' }
//------------------------------------------------------
// interface Flyable {
//     fly(): void;
// }
//
// interface Swimable {
//     swim(): void;
// }
//
// class Duck implements Flyable, Swimable {
//     fly(): void {
//         console.log('Flying...');
//     }
//
//     swim(): void {
//         console.log('Swimming...');
//     }
// }

