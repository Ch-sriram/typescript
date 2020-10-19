"use strict";
function moveAnimal(animal) {
    if ('flyingSpeed' in animal)
        console.log('Moving with speed: ' + animal.flyingSpeed + ' km/h');
    if ('runningSpeed' in animal)
        console.log('Moving with speed: ' + animal.runningSpeed + ' km/h');
}
function animalSpeed(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default: speed = 0;
    }
    console.log("Moving at speed: " + speed + " km/h");
}
animalSpeed({ type: 'bird', flyingSpeed: 20 });
animalSpeed({ type: 'horse', runningSpeed: 50 });
//# sourceMappingURL=app.js.map