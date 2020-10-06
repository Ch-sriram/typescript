/**
 * Literal Types are the types that are dependent on our core
 * types, but they're a specific version of the core type.
 * 
 * Union type is a combination of 2 or more types a variable or
 * const or a function can have.
 */

// LITERAL TYPE
const age = 25; // `age` is now of literal type => when we hover on `age`, we'll see the following: const age: 25, which means `age` cannot be anything other than the number 25.

const sex = 'female'; // hovering on `sex`, we'll see that it is of literal type "female" shown as: const sex: "female"

// A more elaborate usage of Literal Types & Union Types
type NumOrStr = number | string; // union type
type asNumOrText = 'as-number' | 'as-text'; // union & literal type

function combine(input1: NumOrStr, input2: NumOrStr, resultConversion: asNumOrText) {
  let result: NumOrStr;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number')
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

// const combinedNames2 = combine('Ram', 'Roop', 'as-tex'); // error: Argument of type '"as-tex"' is not assignable to parameter of type 'asNumOrText'.ts(2345)

/**
 * Output
 * """"""
 * 56
 * 56
 * MaxAnna
 */
