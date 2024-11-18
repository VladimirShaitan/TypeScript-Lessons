class Car {
    constructor(public brand: string, public model: string) {}
}

class CarFactory {
    createCar(brand: string, model: string): Car {
        return new Car(brand, model);
    }
}

const factory = new CarFactory();
const car = factory.createCar('Toyota', 'Corolla');
console.log(car); // Car { brand: 'Toyota', model: 'Corolla' }