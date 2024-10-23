// Приклад 1: Використання інтерфейсу для динамічних даних

interface DynamicObject {
    [key: string]: any; // Дозволяємо будь-який ключ і тип значення
}

const dynamicData: DynamicObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling"],
};

dynamicData.location = "New York"; // Додаємо нове поле

console.log(dynamicData); // { name: "John", age: 30, hobbies: ["reading", "traveling"], location: "New York" }


/*-----------------------------------------------------------------
Приклад 2: Використання інтерфейсів для опису відповідей API
 -----------------------------------------------------------------*/
interface ApiResponse {
    status: string;
    data: {
        [key: string]: any; // Динамічні дані
    };
}

const fetchData = async (): Promise<ApiResponse> => {
    // Імітація запиту до API
    return {
        status: "success",
        data: {
            id: 1,
            title: "Post Title",
            content: "Post Content",
        },
    };
};

fetchData().then((response) => {
    console.log(response.data.title); // Post Title
});


/*-----------------------------------------------------------------
Приклад 3: Використання інтерфейсів для динамічних форм
 -----------------------------------------------------------------*/
interface FormField {
    [key: string]: string | number; // Дозволяємо будь-які типи даних
}

const formData: FormField = {
    username: "john_doe",
    password: "password123",
};

// Додаємо нове поле до форми
formData.age = 30;

console.log(formData); // { username: "john_doe", password: "password123", age: 30 }


/*-----------------------------------------------------------------
Приклад 4: Інтерфейси для опису функцій з динамічними параметрами
 -----------------------------------------------------------------*/
interface Operation {
    (operation: string, ...args: number[]): number;
}

const calculate: Operation = (operation, ...args) => {
    switch (operation) {
        case "sum":
            return args.reduce((a, b) => a + b, 0);
        case "multiply":
            return args.reduce((a, b) => a * b, 1);
        default:
            return 0;
    }
};

console.log(calculate("sum", 1, 2, 3)); // 6
console.log(calculate("multiply", 2, 3, 4)); // 24


/*-----------------------------------------------------------------
Приклад 5: Використання інтерфейсів для динамічних типів у класах
 -----------------------------------------------------------------*/
interface Product {
    [key: string]: string | number; // Дозволяємо динамічні поля
}

class Store {
    private inventory: Product[] = [];

    addProduct(product: Product) {
        this.inventory.push(product);
    }

    getInventory() {
        return this.inventory;
    }
}

const store = new Store();
store.addProduct({ name: "Laptop", price: 999, brand: "BrandX" });
store.addProduct({ name: "Phone", price: 499, brand: "BrandY", stock: 50 });

console.log(store.getInventory());
