/**
 * without adding annotations, both `a` and `b` has the 'any'
 * type & by inference, `add` now is a const that refers to a
 * function that takes in 2 arguments of 'any' type and
 * returns 'void' i.e., returns nothing.
 */
const add = (a, b) => { }; // hover on `add` and we'll see this: const add: (a: any, b: any) => void. which is the annotation for the variable `add`.

/**
 * Therefore, we always have to add the annotations for the 
 * function parameters. If we don't add the annotation for the
 * return value, TS will infer automatically, based on what 
 * the function returns, which is not recommended, and quite 
 * frankly should be avoided as much as necessary.
 */
const add2 = (a: number, b: number): number => (a + b);

/**
 * If we don't annotate the return value's type during function
 * definition, we might be shooting ourselves in the foot ---
 * because we always know what we want to return from a 
 * function, and so, even if we make a mistake in the the code,
 * when we try to return something that shouldn't be the one 
 * that should be returned, we should get a warning when 
 * returning something we don't want to return, and that's 
 * because of the annotation for the return type on the 
 * function definition.
 */
const subtract = (a: number, b: number) => {
  a - b;
};

// annotation for `subtract` when we hover on it is the following: const subtract: (a: number, b: number) => void
// we can see that it is returning nothing, as the return type is void, as inferred by TS. So we generally never use TS inference for return value of functions.


// Type Annotation for a function definition (not a function expression)
function divide(a: number, b: number): number {
  return a / b;
}

// Type Annotation for an anonymous function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

/**
 * Annotation syntax for arrow functions, anonymous functions 
 * & normal function definitions are similar.
 */
