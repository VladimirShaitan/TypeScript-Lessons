// Приклад 1:

function formatValue(value: number | string): string {
    return `Formatted value: ${value}`;
}

console.log(formatValue(123)); // "Formatted value: 123"
console.log(formatValue("Hello")); // "Formatted value: Hello"


/*-----------------------------------------------------------------
Приклад 2: Використання Union Types в об’єктах
 -----------------------------------------------------------------*/
interface Shape {
    type: "circle" | "square";
    size: number;
}

const shapes: Shape[] = [
    { type: "circle", size: 10 },
    { type: "square", size: 20 },
];

shapes.forEach(shape => {
    if (shape.type === "circle") {
        console.log(`Circle with size: ${shape.size}`);
    } else {
        console.log(`Square with size: ${shape.size}`);
    }
});


/*-----------------------------------------------------------------
Приклад 3: Union Types з функціями
 -----------------------------------------------------------------*/
type StringOrNumber = string | number;

function print(value: StringOrNumber): void {
    console.log(value);
}

print(123);
print("abc");