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
