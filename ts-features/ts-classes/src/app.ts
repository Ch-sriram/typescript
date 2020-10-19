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
 * Hi there - I am Ram
 * Howdy! My name is Roop
 */
