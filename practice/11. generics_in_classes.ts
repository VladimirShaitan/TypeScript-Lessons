class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // 123
//------------------------------------------------------
class Pair<K, V> {
    constructor(public key: K, public value: V) {}
}

const pair = new Pair<string, number>('age', 30);
console.log(pair.key, pair.value); // "age", 30