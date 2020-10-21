// FUNCTION OVERLOADS
/**
 * TS Feature that allows us to define multiple function 
 * signatures with the same function name, i.e., we can have 
 * multiple ways of calling a function with different params
 * where each variant of the function does something different
 */

type Combinable = string | number;

function add_(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
}

const result = add_('Max', ' 1'); // hover on `result` and TS infers the type as: 'const result: Combinable'
// result.split(' '); // Property 'split' does not exist on type 'Combinable'. Even though we know that we are returning a 'string' type data, TS is unable to infer the return type, and for that, we have 2 ways.

// 1. Using `as` keyword
const result2 = add_('Ram', ' 2') as string; // hover on `result2` and TS infers the type as: 'const result2: string'
console.log(result2.split(' ')); // ["Ram", "2"]

// 2. Using function overloading (RECOMMENDED WAY)
// if we've the following function, which is already overloaded

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
}

const res1 = add('Sriram', 1); // when we hover on 'res1', we'll see: `const res1: string` -- not Combinable, as TS automatically infers from the overloads we've above.
console.log(res1.split(' '));

const res2 = add(5, 1); // when we hover on 'res2', we'll see: `const res2: number` -- not Combinable, as TS automatically infers from the overloads we've above.
console.log(res2);

// OPTIONAL CHAINING
/**
 * Let's say we've an app where we get data from some source
 * where we don't know with certainty, if in an object, certain
 * property is defined or not.
 * 
 * If we are fetching the data and it's structure is the 
 * following:
 * fetchedData = {
 *  id: string;
 *  name: string;
 *  job?: object; // `job` is an optional field that we get back from the backend
 * }
 */

// now, if the data we are trying to fetch is the following:
const fetchedUserData1 = {
  id: 'u1',
  name: 'Ram',
  job: { title: 'SDE', description: 'Writes Code & Develops Apps' },
};

// knowing the structure above, if we write the following statement, we can get the data we require
console.log(fetchedUserData1.job.title); // SDE

// now, if the data we get has no `job` property
const fetchedUserData2 = {
  id: 'u2',
  name: 'Roop',
};

// if we try to access the `job.title` field as we did in lin #66 as follows:
// console.log(fetchedUserData2.job.title); // error: Property 'job' does not exist on type '{ id: string; name: string; }'.ts(2339)

// therefore, in this case, we can put a guard in JS style as follows:
// if ('job' in fetchedUserData2 && 'title' in fetchedUserData1.job) {
//   console.log(fetchedUserData2.job.title); // still doesn't compile in strict TS
// }

// otherwise, we can use TS' optional chaining operator (?.) as follows
console.log(fetchedUserData2?.job?.title); // error in TS version < 3.7 | gives us error in compilation itself so that we know it is not there
