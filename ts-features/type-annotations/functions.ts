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

// Function returning void
const logger = (message: string): void => {
  console.log(message);
  // return null; // return undefined; technically, a function that returns 'void' data can return 'null' or 'undefined'.
};

const throwError = (message: string): never => {
  throw new Error(message); // function exec stops here, and so, the function will technically not return anything.

  /**
   * Therefore, a function that never returns anything, 
   * meaning --- this function's end will never be reached, 
   * i.e., the function's execution itself stops in-between 
   * (which is different compared to functions that return 
   * 'void' type data - because a function that returns 'void'
   * type data at least completely executes and doesn't return
   * anything, but here, the function stops execution halfway,
   * and so, we can say that the function never returns any 
   * value. And so, we annotate the function with a return 
   * value of 'never')
   */
};

/**
 * The usage of 'never' is a corner case in the sense that 
 * it'll only be used when we want to throw an error. In other
 * cases where we have to return something, we generally never
 * make of the type 'never'.
 * 
 * We only annotate the return type of a function to be 'never'
 * when we really truly never expect a function to return
 * anything ever.
 * 
 * If we at least expect the function to return something at 
 * least, of some type, even though we might've some 
 * possibility of throwing an error somewhere in the code, 
 * that's totally fine, as we at least return something, and
 * so in that case we can annotate the return type to be the 
 * type of the value we are ultimately returning, as shown 
 * below.
 */

const throwError2 = (message: string): string => {
  if (!message)
    throw new Error; // just because we throw an error, doesn't mean we annotate the return type of this function to be 'never'
  
  return message; // as there's something we are returning here, we need not use the 'never' type to annotate this function's return value.
};

/**
 * If we return no value, and if there's a chance where we 
 * don't reach the end of the execution of the function, even
 * in that case, we won't make use of the 'never' type as the
 * annotation for the return value of the function as shown in 
 * the example below.
 */

const throwError3 = (message: string): void => {
  if (!message)
    throw new Error; // this can only happen when there's no `message`, and so even if there's a chance that this line need not execute, we don't make use of 'never'.
  
  /**
   * We only truly make use of the 'never' type, when we know 
   * for sure that the function will stop its execution 
   * halfway and not return anything.
   */
};
