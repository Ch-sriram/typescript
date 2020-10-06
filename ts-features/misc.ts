/**
 * Let's say we have a variable known as `userInput`, which is
 * if 'unknown' type as shown below.
 */

let userInput: unknown;

/**
 * With 'unknown' typed variables, we can assign whatever type
 * of data we want, as shown below:
 */

userInput = 10;
userInput = 'Ram';

/**
 * The problem occurs when we try to assign this 'unknown' 
 * type variable to some other variable with some annotated 
 * type.
 */

let userName: string;
// userName = userInput; // error: Type 'unknown' is not assignable to type 'string'.ts(2322). If `username` was of type 'any', there wouldn't have been any error. Or, if `userInput` itself was of 'any' type, we wouldn't have gotten any error

/**
 * With 'unknown' variables, we have to manually check the type
 * of data assigned to the variable that is of 'unknown' type
 * and then assign it to the other variable which is of the
 * respective type of data which is currently present inside 
 * the 'unknown' typed variable. Example shown below.
 */

if (typeof userInput === 'string')
  userName = userInput; // this is legal now, because the type check for the 'unknown' typed variable is performed above
