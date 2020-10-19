// we can define type of a function as follows:
type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
console.log(add(100, 200));

// As an alternative to the custom type above, we can use interface as follows for the type of a function
interface AddFunction {
  (a: number, b: number): number; // an anonymous function that takes in a & b as numbers and returns a number
}

let addFunction: AddFunction;
// addFunction = (n1: string, n2: number) => n1 + n2; // Type '(n1: string, n2: number) => string' is not assignable to type 'AddFunction'. Types of parameters 'n1' and 'a' are incompatible. Type 'number' is not assignable to type 'string'.ts(2322)
addFunction = (n1: number, n2: number) => n1 + n2;  // no error
console.log(addFunction(10, 20));

// We can extend one interface to another interface as follows
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// a class can implement any number of interfaces using the following syntax
// interface A {/* some definitions */}
// interface B {/* some definitions */}
// class C implements A, B {/* some definitions */}
class Person implements Greetable {
  // name: string; // adding because of the 'Greetable' interface
  age = 30; // this class' property (interface doesn't matter)

  constructor(public name: string) {}
  
  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
};

const user2 = new Person('Ram');
user2.greet('Hi there - I am');

let user3: Greetable;
user3 = new Person('Roop'); // this is valid, as 'Person' implements 'Greetable' interface
user3.greet('Howdy! My name is');
// user3.name = 'Ram'; // Cannot assign to 'name' because it is a read-only property.ts(2540)

/**
 * Output
 * ------
 * 300
 * 30
 * Hi there - I am Ram
 * Howdy! My name is Roop
 */
