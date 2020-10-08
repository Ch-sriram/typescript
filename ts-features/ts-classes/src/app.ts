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
  describe(this: Department): void {
    // console.log('Department: ' + name); // 'Department: undefined' --- since we are trying to access `window.name`
    console.log('Department: ' + this.name); // 'Department: Accounting'
  }
};

// creating an instance of the Department class
const accounting = new Department('Accounting');
accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // error: The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
// Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.ts(2684)

/**
 * To make sure that we can use `accountingCopy`, we've to 
 * define the 'name' property inside the `accountingCopy` 
 * object, as shown below.
 */

const accountingCopy = { name: 'TEST', describe: accounting.describe };
accountingCopy.describe(); // no error: as now, `accountingCopy` object conforms to the 'Department' type.

/**
 * What we basically did is that, whenever we want to execute
 * the describe() method, the `this` should always be of 
 * 'Department' type, otherwise, tsc will raise an error.
 */

/**
 * Output
 * ------
 * Department: Accounting
 * Department: TEST
 */
