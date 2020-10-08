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
};

// creating an instance of the Department class
const accounting = new Department('Accounting');

console.log(accounting);

/**
 * Output
 * ------
 * Department
 *  > name: "Accounting"
 *  > proto: Object
 */
