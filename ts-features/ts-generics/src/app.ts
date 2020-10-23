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


// GENERIC FUNCTIONS
// a function that merges 2 objects objA & objB as the input
function mergeObjects_(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(mergeObjects_({ name: 'Ram' }, { age: 25 })); // {name: "Ram", age: 25}

// we don't get any error when we output the merged object.
// the problem occurs when we try to store the merged object
const mergedObj_ = mergeObjects_({ name: 'Ram' }, { age: 25 });

// now when we try to access the 'name' and 'age' field of mergedObj_, TS will thrown an error:
// mergedObj_.name; // Property 'name' does not exist on type 'object'.ts(2339)
// mergedObj_.age; // Property 'age' does not exist on type 'object'.ts(2339)

// So here, there are 2 ways to resolve the issue unknown properties

// #1
// we can annotate that the type of the merged object we get back has a certain structure using the `as` keyword as shown below.
const mergedObject_ = mergeObjects_({ name: 'Ram' }, { age: 25 }) as { name: string, age: number };
// now we can access the 'name' and 'age' properties w/o raising any errors
mergedObject_.name;
mergedObject_.age;

// #2
// We can make use of generics to define the mergeObjects() function itself as follows:

// in the angle brackets after function name, we have mentioned to arbitrary types (T & U), which are just type placeholders.
// when the mergeObjects() method is called with some kind of data, TS automatically infers the type of T and U
function mergeObjects<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
} // when we hover on 'mergeObjects', we see its type def as > function mergeObjects<T, U>(objA: T, objB: U): T & U
// Here, TS infers that this method returns us an intersection of type T and U, i.e., T & U

const mergedObject = mergeObjects({ name: 'Ram' }, { age: 25 }); // hover on 'mergedObject' and we'll see the following type def > `const mergedObject: {name: string;} & {age: number;}`

// we can access the mergedObject's properties w/o any other annotation, because TS inferred the type of the parameter being sent to the mergeObjects because of function being a generic.
console.log(mergedObject.name); // Ram
console.log(mergedObject.age); // 25

/**
 * The reason why TS couldn't infer the returned value of 
 * mergeObjects_() defined in line #54 and called in line #58 
 * is because both objA and objB were of 'object' type, and 
 * an 'object' type can have any properties/methods.
 * 
 * And from the function, we're returning an intersection of
 * both the objects objA & objB, that means the type we're 
 * returning was also intersection of 2 'object's types which
 * is 'object & object', which turns out to be 'object'.
 * 
 * Therefore, TS will understand that we're sending any kind 
 * of an object and getting back any kind of an object, where
 * there's no concreteness (highly vague).
 * 
 * To solve this issue, we need to make a generic function as 
 * shown in line #78, so when it is called (like in line #83)
 * TS automatically infers the type of the data that's sent
 * into the method.
 */

// Also, specifically, when we define a generic function, we 
// don't set the type then and there, but the types are 
// resolved when that generic function is called.

// therefore, we can send any kind of data to the mergeObjects() method as shown below.
const mergedObject2 = mergeObjects(
  { name: 'Ram', hobbies: ['Reading', 'Coding', 'Sports'] },
  { age: 25, occupation: 'software engineer' }
);

// now when we hover on 'mergedObject2', we see the following 
// type definition (inferred automatically by TS):
// const mergedObject2: {
//     name: string;
//     hobbies: string[];
// } & {
//     age: number;
//     occupation: string;
// }

console.log(mergedObject2.name, mergedObject2.hobbies[2], mergedObject2.age, mergedObject2.occupation); // Ram Sports 25 software engineer

// while calling the generic function, before passing in the 
// data, we can specifically mention the types of the 
// parameters that we're sending to the function as follows:
const mergedObject3 = mergeObjects<{ name: string, hobbies: string[] }, { age: number, occupation: string }>(
  { name: 'Ram', hobbies: ['Reading', 'Coding', 'Sports'] },
  { age: 25, occupation: 'software engineer' }
);

// although we can mention the types of the parameters we're sending to the generic function, but it is redundant, as TS
// already infers the type of the values we send as the parameters into the generic function.


// GENERIC CONSTRAINTS
// with the function we defined in line #78, if we try and send
// it any kind of an argument, the function won't give any 
// error, i.e., if we try to make a new object as follows:
const mergedObject4 = mergeObjects({ name: 'Ram', hobbies: ['Coding'] }, 30); // returns no error even when we sent in 30 ('number' type data) to the generic function because the function accepts generic arguments.

// according to TS, there's no error, but when we try and access 30, we cannot because 30 is not an object, and Object.assign() is only capable of merging objects.
// And so, we won't be able to merge 30 into objA as seen below
console.log(mergedObject4); // {name: "Ram", hobbies: ["Coding"]}

// this happens because we have used T & U as the types w/o 
// putting in any constraints, i.e, we don't care if T & U are
// whatever type they can be.

// but in reality, we should constrain what we are able to send
// in as the type of the value to the mergedObject() method 
// defined in line #78.

// therefore, what we can do is, we can constrain the function
// line #78 to accept a value, which can be any 'object' by
// restricting the type T & U to be based on only 'object' type

// so now, we will redefine the function in line #78 as follows:
function mergeObjs<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// <T extends object> means that the T type can be any 'object' with any structure, but it cannot be anything other than 'object'

// now the function above will only accept an 'object' type 
// data, but this time, TS will be able to infer the structure
// of the 'object' type data and will return an intersected
// 'object' typed value, which will have all its properties/
// methods accessible w/o anymore type annotation.




// GENERIC FUNCTION w. CUSTOM TYPES

interface Lengthy { length: number };

// T type object, whatever it is, contains a 'length' property
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = (element.length === 0) ? 'Got no value.' : `Got ${element.length} element(s).`;
  return [element, descriptionText];
}

// Calling countAndDescribe() with any object that has a 'length' property will throw yield no errors
console.log(countAndDescribe('Hi there!')); // ["Hi there!", "Got 9 element(s)."]
console.log(countAndDescribe(['Sports', 'Cooking', 'Coding'])); // [["Sports", "Cooking", "Coding"], "Got 3 element(s)."]
// console.log(countAndDescribe(10)); // error: Argument of type 'number' is not assignable to parameter of type 'Lengthy'.ts(2345) -- as a 'number' type doesn't contain 'length' property
