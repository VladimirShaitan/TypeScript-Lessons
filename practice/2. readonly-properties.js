"use strict";
var person = { id: 1, name: "Alice" };
var numbers = [1, 2, 3];
numbers.push(4); // Помилка: метод "push" не може бути викликаний
/*-----------------------------------------------------------------
Приклад 3: Використання Readonly в класах
 -----------------------------------------------------------------*/
var ImmutablePoint = /** @class */ (function () {
    function ImmutablePoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return ImmutablePoint;
}());
var point = new ImmutablePoint(10, 20);
// point.x = 15; // Помилка: властивість "x" не може бути змінена
