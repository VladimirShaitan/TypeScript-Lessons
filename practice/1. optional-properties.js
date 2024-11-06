"use strict";
// Приклад 1:
function configureSettings(settings) {
    // console.log(settings.volume + 20)
    if (typeof settings.volume === 'number') {
        console.log(settings.volume + 20);
    }
    console.log("Volume: ".concat(settings.volume !== undefined ? settings.volume : "default"));
    console.log("Brightness: ".concat(settings.brightness !== undefined ? settings.brightness : "default"));
}
configureSettings({ volume: 70 }); // Тільки volume
configureSettings({ brightness: 50 }); // Тільки brightness
configureSettings({}); // Жодне з налаштувань не задане
