"use strict";
// Приклад 1: Використання інтерфейсу для динамічних даних
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dynamicData = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling"],
};
dynamicData.location = "New York"; // Додаємо нове поле
console.log(dynamicData); // { name: "John", age: 30, hobbies: ["reading", "traveling"], location: "New York" }
var fetchData = function () { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        // Імітація запиту до API
        return [2 /*return*/, {
                status: "success",
                data: {
                    id: 1,
                    title: "Post Title",
                    content: "Post Content",
                },
            }];
    });
}); };
fetchData().then(function (response) {
    console.log(response.data.title); // Post Title
});
var formData = {
    username: "john_doe",
    password: "password123",
};
// Додаємо нове поле до форми
formData.age = 30;
console.log(formData); // { username: "john_doe", password: "password123", age: 30 }
var calculate = function (operation) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    switch (operation) {
        case "sum":
            return args.reduce(function (a, b) { return a + b; }, 0);
        case "multiply":
            return args.reduce(function (a, b) { return a * b; }, 1);
        default:
            return 0;
    }
};
console.log(calculate("sum", 1, 2, 3)); // 6
console.log(calculate("multiply", 2, 3, 4)); // 24
var Store = /** @class */ (function () {
    function Store() {
        this.inventory = [];
    }
    Store.prototype.addProduct = function (product) {
        this.inventory.push(product);
    };
    Store.prototype.getInventory = function () {
        return this.inventory;
    };
    return Store;
}());
var store = new Store();
store.addProduct({ name: "Laptop", price: 999, brand: "BrandX" });
store.addProduct({ name: "Phone", price: 499, brand: "BrandY", stock: 50 });
console.log(store.getInventory());
