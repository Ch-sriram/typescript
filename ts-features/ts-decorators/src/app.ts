// Make sure that "target" in tsconfig.json is set to "es6" and "experimentalDecorators" to true before running this file

// Decorators are used for meta programming, which are always 
// used in tandem with classes. Decorators give information on
// programming constructs.

// so if we have a 'Person' class as follows:
// class Person {
//   name = 'Ram';

//   constructor() {
//     console.log('Creating Person Object...');
//   }
// }

// const person = new Person();
// console.log(person);

// Output
// ------
// Creating Person Object...
// Person {name: "Ram"}

/** Now, we'll add a decorator as follows */
// By convention, decorators are functions that start with an uppercase english letter and also, it receives one parameter
// which is the constructor function of the class that the decorator acts on. 
// We use the '@' symbol before class' definition to execute the decorator on the class' definition.
// Decorators execute when the class' definition itself is parsed, there's not need to create an instance of the class.
// Decorators help other programmers/users to view/understand what the class/programming-construct has/does.

// we generally receive a 'target' parameter for a decorator to be used on a class, we can name it whatever we want, like 'constructor'
function Logger(constructor: Function) { 
  console.log('Logging Person Object....');
  console.log(constructor);
}

@Logger // we don't call the Logger method, we only refer to it
class Person {
  name = 'Ram';

  constructor() {
    console.log('Creating Person Object...');
  }
}

const person = new Person();
console.log(person);

/**
 * Output
 * ------
 * 
 * Logging Person Object....
 * class Person {
 *    constructor() {
 *        this.name = 'Ram';
 *        console.log('Creating Person Object...');
 *    }
 * }
 * Creating Person Object...
 * Person {name: "Ram"}
 */
