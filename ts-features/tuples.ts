// Assume that `drink` is an object as the following:
const drink = { colour: 'brown', carbonated: true, sugar: 40 };

// Instead of representing the `drink` as an object, we sometimes might want to represent it as a Tuple.

/**
 * Tuple is a collection of records in an order. For example, 
 * the `drink` object above has `colour`, `carbonated` and 
 * `sugar` fields, which can also be represented as an array
 * with only the values as: ['brown', true, 40], as shown below
 */
const pepsi = ['brown', true, 40]; // hover on `pepsi` and we see -- const pepsi: (string | number | boolean)[]

/**
 * The problem with the `pepsi` array (not the tuple) is that
 * it is still an array and not a tuple, because we can still
 * insert records where we can swap the ordering of the 
 * elements inside the array as shown below.
 */
pepsi[0] = 40;
pepsi[2] = 'brown';

// latest value of `pepsi`: [40, true, 'brown']
/**
 * Because we can change the ordering of the record in the 
 * array, we can see how this quickly can disintegrate the 
 * entire data model, if the data model depends on tuples.
 * 
 * So, we should not allow any changes to the array and make 
 * sure that it does not allow any reordering of elements, and
 * so, we make it a tuple.
 * 
 * Therefore to make a tuple from an array, we have to provide 
 * the type annotation as follows
 */
const coke: [string, boolean, number] = ['brown', true, 40];

// Now we cannot change the ordering of elements inside `coke` which is now a tuple, and also, every value of the tuple has to be of a specific type, depending on the index.
// coke[0] = 40; // error: Type 'number' is not assignable to type 'string'.ts(2322)

/**
 * Now, instead of making an annotation of as follows:
 *  [string, boolean, number]
 * We can use type aliasing using the `type` keyword and use
 * the alias of the type we defined for the tuple, which is 
 * shown below as follows:
 */
// Type Alias
type Drink = [string, boolean, number]; // Drink is an alias for the tuple with type [string, boolean, number]

// Usage of Type Alias
const sprite: Drink = ['clear', true, 40]; // same as -- const sprite: [string, boolean, number] = ['clear', true, 40];
const water: Drink = ['clear', false, 0];
const tea: Drink = ['brown', false, 0];

// Why Tuples & Why Not Tuples?

/**
 * Let's make a tuple called `carSpecs` which has some data 
 * with a real important meaning.
 */
const carSpecs: [number, number] = [400, 3354];

/**
 * By simply looking at `carSpecs` tuple, we cannot say what
 * the numbers inside the tuple mean for us as engineers.
 * 
 * So now, let's try writing out that same tuple as an object.
 */

const carStats = { horsepower: 400, weight: 3354 };

/**
 * We can see that `carStats`, as an object, is very obvious
 * with the <key: value> pairs it has, and so, there's lesser
 * amount of ambiguity in the values.
 * 
 * Therefore, whenever we make use of an object when we model 
 * a record, it is extremely clear what we are working with at
 * one glance. But when we are working with tuples, it is much
 * harder to understand what's going on at a glance of the 
 * data.
 * 
 * In general, whenever we have to persist records in the TS/JS
 * application, we use objects.
 * 
 * There are some corner cases where we use tuples, and there, 
 * tuples really shine, like for example, to store/retrieve 
 * records in/from a CSV file.
 */
