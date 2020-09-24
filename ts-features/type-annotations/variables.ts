const apples: number = 5; // cannot assign any other data except for a number.

// apples = 6; // error, because apples is a const

let apple: number = 10; // we can reassign it to some other number type value.
apple = 20; // perfectly valid because `apple` is a variable that accepts only number.

// apple = 'asdasd'; // error: Type 'string' is not assignable to type 'number'. ts(2322)

let speed: string = 'fast'; // `speed` is of 'string' type
// speed = 10; // error: Type 'number' is not assignable to type 'string'. ts(2322)

let hasName: boolean = true;
// hasName = 'false'; // error: Type 'string' is not assignable to type 'boolean'. ts(2322)

// here, value and the type both the same >> line #17 & #18
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date(); // perfectly valid
// now = now.getTime(); // error: Type 'number' is not assignable to type 'Date'.ts(2322)

// TYPE ANNOTATIONS for ARRAYS, CLASSES & OBJECT LITERALS 

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, false, false, true];

// Classes
class Car {}; // `Car` has no properties/methods
let car: Car = new Car();

// Object Literals
let point: { x: number; y: number; } = { x: 10, y: 20, };
// let point2: { x: number; y: number; } = { x: "", y: 30 }; // error: Type 'string' is not assignable to type 'number'.ts(2322). variables.ts(37, 15): The expected type comes from property 'x' which is declared here on type '{ x: number; y: number; }'
