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
