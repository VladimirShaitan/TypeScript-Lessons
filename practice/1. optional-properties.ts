// Приклад 1:

// interface Car {
//     make: string;
//     model: string;
//     year?: number; // Опціональна властивість
// }
//
// const car1: Car = { make: "Toyota", model: "Corolla" }; // year відсутня
// const car2: Car = { make: "Honda", model: "Civic", year: 2020 }; // year присутня

/* ------------------------------------------------------------
Приклад 2: Використання опціональних властивостей в функціях
------------------------------------------------------------ */

interface Settings {
    volume?: number; // Опціональна властивість
    brightness?: number; // Опціональна властивість
}

function configureSettings(settings: Settings) {
    // console.log(settings.volume + 20)

    if(typeof settings.volume === 'number') {
        console.log(settings.volume + 20)
    }

    console.log(`Volume: ${settings.volume !== undefined ? settings.volume : "default"}`);
    console.log(`Brightness: ${settings.brightness !== undefined ? settings.brightness : "default"}`);
}

configureSettings({ volume: 70 }); // Тільки volume
configureSettings({ brightness: 50 }); // Тільки brightness
configureSettings({}); // Жодне з налаштувань не задане