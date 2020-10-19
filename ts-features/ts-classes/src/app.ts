// DISCRIMINATED UNIONS
// It is a special kind of a type guard which is a design 
// pattern which we can use when working with union types, 
// which makes implementing type guards for union types, easier

interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if ('flyingSpeed' in animal)
    console.log('Moving with speed: ' + animal.flyingSpeed + ' km/h');
  if ('runningSpeed' in animal)
    console.log('Moving with speed: ' + animal.runningSpeed + ' km/h');
}

/**
 * There are a lot of pitfalls of using type guards as defined
 * above, and they're:
 * 1. We can mistype either 'flyingSpeed' or 'runningSpeed' property names.
 * 2. More types we have in the union of Animal, more properties we have to check.
 * 3. We cannot use the `instanceof` keyword as we are working with interfaces (and interfaces are not compiled to JS).
 */

/**
 * So, we can build a Discriminated Union here by giving every
 * interface an extra property -- conventionally known as 
 * 'kind' or 'type', which are literal types. Demo shown below.
 */

interface Bird {
  type: 'bird'; // this is a literal type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type AnimalType = Bird | Horse;

// now we can use a switch-case to check the 'type' of the 'animal' being passed as the type
function animalSpeed(animal: AnimalType): void {
  let speed: number;
  switch (animal.type) {
    // we will now get TS intellisense help to type in the types
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default: speed = 0;
  }
  console.log(`Moving at speed: ${speed} km/h`);
}

animalSpeed({ type: 'bird', flyingSpeed: 20 });
animalSpeed({ type: 'horse', runningSpeed: 50 });

/**
 * Now, 'AnimalType' is a discriminated union because 'Bird' &
 * 'Horse' interfaces have 1 common literal type property which
 * is the factor of discrimination/uniqueness between a 
 * particular type of 'AnimalType'.
 */

/**
 * Output:
 * ======
 * Moving at speed: 20 km/h
 * Moving at speed: 50 km/h
 */
