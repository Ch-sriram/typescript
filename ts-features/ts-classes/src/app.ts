/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  name: string; // property definition in class using ESNext syntax

  // special function called when the instance of Department is created, aka constructor() function
  constructor(name: string) {
    this.name = name;
  }

  // adding a method in the class
  describe(): void {
    // console.log('Department: ' + name); // 'Department: undefined' --- since we are trying to access `window.name`
    console.log('Department: ' + this.name); // 'Department: Accounting'
  }
};

// creating an instance of the Department class
const accounting = new Department('Accounting');
accounting.describe();

/**
 * The `this` keyword can be tricky to understand, and so, if
 * we want to, we can make a copy of the `describe()` method 
 * inside the Department class using another object as follows
 */
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // 'Department: undefined' --- because accountingCopy has no `name` property

/**
 * The `this` has not been enforced to check for what object 
 * is calling the `describe()` method, and so, we can basically
 * call describe() from `accountingCopy` object too. 
 * 
 * To avoid this, we have to pass in the `this` object for the
 * describe() method with a type annotation of 'Department',
 * which we'll see next.
 */

/**
 * Output
 * ------
 * Department: Accounting
 * Department: undefined
 */
