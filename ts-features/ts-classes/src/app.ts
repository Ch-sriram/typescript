/**
 * Interface can only be used to define an object whereas 
 * custom types (using `type` keyword) can also be used to 
 * defining arrays, union types, literal types, etc.
 */

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
};

let user1: Person;

user1 = {
  name: 'Ram',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hello -- I am');

// If we make a 'Greetable' and implement it for a class, then that class has to implement all the properties/functions of that interface
interface Greetable {
  readonly name: string;
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
 * Hello -- I am Ram
 * Hi there - I am Ram
 * Howdy! My name is Roop
 */
