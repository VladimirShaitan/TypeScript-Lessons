// Приклад 1:
interface ImmutablePerson {
    readonly id: number;
    readonly name: string;
}

const person: ImmutablePerson = { id: 1, name: "Alice" };
// person.id = 2; // Помилка: властивість "id" не може бути змінена

/*-----------------------------------------------------------------
Приклад 2: Використання Readonly в масивах
 -----------------------------------------------------------------*/
type ReadonlyArray<T> = ReadonlyArray<T>;

const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(4); // Помилка: метод "push" не може бути викликаний


/*-----------------------------------------------------------------
Приклад 3: Використання Readonly в класах
 -----------------------------------------------------------------*/
class ImmutablePoint {
    constructor(public readonly x: number, public readonly y: number) {}
}

const point = new ImmutablePoint(10, 20);
// point.x = 15; // Помилка: властивість "x" не може бути змінена

