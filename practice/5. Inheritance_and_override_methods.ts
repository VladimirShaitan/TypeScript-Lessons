class Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getRole(): string {
        return 'Employee';
    }
}

class Manager extends Employee {
    getRole(): string {
        return 'Manager';
    }
}

const emp = new Employee('John');
console.log(emp.getRole()); // "Employee"

const mgr = new Manager('Jane');
console.log(mgr.getRole()); // "Manager"