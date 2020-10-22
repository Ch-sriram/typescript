// BUILT-IN GENERICS

// a default type which is built into generics, is an array
const names = ['Max', 'Manu']; // type def > const names: string[]

// another type we have can be the following
const elements = []; // type def > const elements: any[]

// we actually have an Array generic type which can be defined as follows
// const namesArr: Array = []; // error: Generic type 'Array<T>' requires 1 type argument(s).ts(2314)
const namesArr: Array<string> = []; // type def > const namesArr: string[]

// the notation used in defining the type of an array of strings in line #11 is that of a generic type

/**
 * A Generic Type is connected to some other type, but a 
 * generic type is really flexible regarding what that other 
 * type is. We define what that other type is, by specifying 
 * it inside the angular brackets as shown above. Note that we
 * can have any kind of a type given inside the angular 
 * brackets.
 */

// Another built in generic type in TS is the Promise type
// const promise_ = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     (Math.random() >= 0.5) ?
//       resolve('This is done!') : reject('There\'s an Error');
//   }, 2000);
// }); // here, we don't define  what we expect back from this promise. As we can see, for now we're returning 'string' data.

// but what if when the promise is resolved and the programmer handles the data thinking the promise returned a number or a boolean? shown as follows:
// promise_
//   .then(data => {
//     data.toString(); // Object is of type 'unknown'.ts(2571)
//   })
//   .catch(error => {
//     console.log(error); 
//   })

// therefore, we need to have better annotation for the return type of the promise as follows:
const promise: Promise<string> = new Promise((resolve, reject) => setTimeout(() => (Math.random() >= 0.5) ? resolve('This is done!'): reject('There\'s an Error'), 1000));
promise
  .then(data => console.log(data.split(' ')))
  .catch(error => console.log(error.split(' ')));
