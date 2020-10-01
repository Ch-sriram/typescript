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
