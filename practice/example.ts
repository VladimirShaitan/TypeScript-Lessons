const user = {
    name: 'Alex',
    age: 10
}


class User {
    name = 'Alex'
    age = 10
}


const usr1 = new User(); // { name: 'Alex', age: 10 }
const usr2 = new User(); // { name: 'Alex', age: 10 }

usr1 === usr2 // false


// Pseudo code
class Singleton {
    name = 'Alex'
    age = 10
}

const s1 = new Singleton(); // { name: 'Alex', age: 10 }
const s2 = new Singleton(); // { name: 'Alex', age: 10 }

s1 === s2 // true



const arr = ['vova', 10, function (){}, [{}, {}],]

interface ArrayMethodCallback<K, F> {
    (item: K, index: number, arr: K[] ): F
}

function forEach<T>(arr: T[], callback: ArrayMethodCallback<T, void>): void {
    for(let i = 0; i < arr.length; i += 1) {
        callback(arr[i], i, arr);
    }
}

function map<T>(
    arr: T[],
    callback: ArrayMethodCallback<T, T[]>
): T[] {
    const results: T[] = [];

    for(let i = 0; i < arr.length; i += 1) {
        results.push(
            callback(arr[i], i, arr)
        );
    }

    return results;
}

forEach(arr, (item) => {
    console.log(item)
})

// map(arr, (item) => {
//     console.log(item)
// })
