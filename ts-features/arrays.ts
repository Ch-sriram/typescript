/**
 * In general, arrays in TS are meant to be only hold a 
 * collection of values of a single type. Although we can 
 * annotate the array for multiple types, we still only stick 
 * to have a single typed array.
 */

const carMakers = ['ford', 'toyota', 'chevy']; // when we hover on `carMakers` variable, we see that TS has inferred that the array is of type string, and it is defined as: const carMakers: string[]

// we can be explicit about the type of array without depending on TS' inference
const carMakers2: string[] = ['ford', 'toyota', 'chevy'];

/**
 * whenever we want to initialize an empty array, we always
 * have to annotate its type, otherwise TS will infer the array
 * to be of 'any' type, which is to be avoided as much as 
 * possible.
 */
const carMakers3 = []; // hover on `carmakers3`, we will see that it is of type 'any[]' shown as: const carMakers3: any[].


// So we always annotate empty arrays with a type as seen below
const carMakers4: string[] = []; // now `carMakers4` will be of type 'string[]' when we hover on it.

/**
 * TS will generally infer the type of the array using the 
 * contents of the array when they're initialized.
 */
const dates = [new Date(), new Date()]; // `dates` is of type 'Date[]' now as inferred by TS: const dates: Date[].

/**
 * We can also write out 2D arrays very easily as shown below
 */

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // when we hover on `carsByMake`, we will see the type of the const variable as 'string[][]', shown as: const carsByMake: string[][]

// Again, if we are not initializing the array with anything, in that case, we have to annotate the type of the array, as shown below.
const carsByMake2: string[][] = []; // 'string[][]' means (read from right to left) an array which refers to a array of strings.


// WHY TYPED ARRAYS?

// Reason #1: TS can do type inference when extracting values from an array
const car = carMakers[0]; // hover over `car` and we'll see that `car` is of type 'string' because `carMakers` is of type 'string[]'.
const myCar = carMakers.pop(); // typeof myCar is 'string' shown as: const myCar: string.

// Reason #2: TS can prevent us from adding incompatible values to the array.
// carMakers.push(100); // error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// Reason 3: We can get help with 'map', 'forEach', 'reduce', etc functions
const carMakers5 = carMakers2.map((car: string): string => car.toUpperCase()); // TS will infer the type of the 'map()' function and also TS will provide ample amount of help with autocomplete in the code editor.

// Reason 4: A single array can have multiple types.


/**
 * `importantDates` contain Date values, but some of them are 
 * Date objects, and some of them are strings --- and so, we 
 * can let TS infer that by just initializing the array with 
 * all the types of values in the array as shown below (this 
 * way is not recommended).
 */
const importantDates = [new Date(), '2030-10-10']; // when we hover over `importantDates`, we will see the following: const importantDates: (string | Date)[].

// But we should not let TS infer the types because if we initialize the array with only the Date object, TS will infer it as of type 'Date[]'
const importantDates2 = [new Date()]; // TS infers `importantDates2` as of type 'Date[]'.

// Therefore, we should always be specific with the annotations.
const importantDates3: (string | Date)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); // error: Argument of type 'number' is not assignable to parameter of type 'string | Date'.ts(2345)
