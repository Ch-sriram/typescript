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



// keyof CONSTRAINT

// function extractAndConvert(obj: object, key: string) {
//   return obj[key];
// }

// extractAndConvert({}, 'name');

// Error in line #202 will be the following if we don't mention
// the generic type.
// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
//   No index signature with a parameter of type 'string' was found on type '{}'.ts(7053)

/**
 * We get an index error because TS cannot infer any key of an
 * object until and unless we mention the `keyof` constraint 
 * specifically as shown below.
 */

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

// In line #218, we have: `U extends keyof T`
// which means that 'U' will be a key inside the object of type 'T'

// extractAndConvert({}, 'name'); // Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345). Error occurred because the object passed didn't have a 'name' property

console.log(extractAndConvert({ name: 'Ram' }, 'name')); // Value: Ram

// console.log(extractAndConvert({ name: 'ram' }, 'age')); // Argument of type '"age"' is not assignable to parameter of type '"name"'.ts(2345), because 'age' is not a property in the object we sent in.



// GENERIC CLASSES

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// if we only want to store text, we can use DataStorage for 'string' types
const textStorage = new DataStorage<string>();
// textStorage.addItem(10); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
textStorage.addItem('crazy');
textStorage.addItem('ram');
console.log(textStorage.getItems()); // ["crazy", "ram"]
textStorage.removeItem('ram');
console.log(textStorage.getItems()); // ["crazy"]

// if we want to store int or float values, we can use the 'number' typed DataStorage instance
const numberStorage = new DataStorage<number>();
numberStorage.addItem(25);
// numberStorage.addItem('443'); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
numberStorage.addItem(244.2322);
numberStorage.removeItem(25);
console.log(numberStorage.getItems()); // [244.2322]

// we can also have a union type storage as follows
const numberStringStorage = new DataStorage<number | string>();
numberStringStorage.addItem('swaroop');
numberStringStorage.addItem(233.44);
// numberStringStorage.addItem(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

/**
 * One problem we might've would be using the DataStorage class
 * and that is storing the objects, i.e., we've to store 
 * objects using the DataStorage class.
 * 
 * In that case, removeItem() method of the DataStorage class
 * won't work properly because objects in TS/JS aren't stored
 * using the indices -- and inside the removeItem() method,
 * we're trying to access the object data using the index of 
 * the object which we get as -1 and in JS/TS '-1'th index 
 * signifies the last element, and so, the last element in the
 * object container will be removed as seen below.
 */

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: 'Ram' });
objectStorage.addItem({ name: 'Roop' });

// do some operations on the objects and then remove the item
objectStorage.removeItem({ name: 'Ram' }); // removes {name: 'Roop'} because that's the last object as explained above in line 275 to 285.

console.log(objectStorage.getItems()); // [0: {name: "Ram"}]

/**
 * Even if we add 'Roop' back and remove some random element 
 * which is not even there in the `data` of the instance, even
 * then, we would remove the last element inside the `data` 
 * property list of the objectStorage instance, because of the
 * way our DataStorage class is built.
 * 
 * As objects and arrays are reference types, inside our 
 * DataStorage class, we won't be able to refer to their 
 * indices, as we use indexOf() method expects the same value/
 * reference that was stored inside its object previously.
 * 
 * When we're trying to call removeItem() using an object made 
 * then and there, JS/TS will create the same object with a 
 * different reference and then indexOf() won't be able to find
 * it inside the list of objects inside `data` property of the
 * objectStorage instance.
 * 
 * To show an example of how to make this work, we do the 
 * following for the current way DataStorage class is defined
 */

objectStorage.removeItem({}); // we'll still be able to remove the last element, which is {name: "Ram"}
console.log(objectStorage.getItems()); // []

// now, we can remove the appropriate element using it's reference stored at some place else
const obj1 = { name: "Ram" };
const obj2 = { name: "Roop" };

objectStorage.addItem(obj1);
objectStorage.addItem(obj2);
objectStorage.removeItem(obj1); // it will properly delete {name: "Ram"} from the `data` property object list
console.log(objectStorage.getItems()); // {0: {name: "Roop"}}

/**
 * Although we can use the DataStorage class for object and 
 * array type data types as seen above, but still it won't be a
 * good way to use the DataStorage class because we still have 
 * to know the array/object items' reference which can only be
 * achieved by storing each and every array/object element 
 * added to the DataStorage class' instance by storing them in 
 * a separate container, which will take extra space, which we
 * don't want to do, as that's wastage of space.
 */

/**
 * Therefore, a better idea would be to make a 'DataStorage' 
 * class just for primitive types and then make another 
 * 'DataStorage' class for reference typed data.
 * 
 * And that can be done as follows:
 *  class DataStorage<T extends string | number | boolean>
 */
