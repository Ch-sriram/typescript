/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  /**
   * If we don't want the user to change a particular property
   * after it is initialized, in that case, what we do is, we
   * change that property's access to 'readonly' using the
   * `readonly` keyword. This keyword only works with TS (just
   * like `private` & `public`)
   */
  // shorthand define & initialize the properties
  constructor(private readonly id: string, public name: string) { }
  
  // if we now try to change the `id` value, we will get an error from TS

  // adding a method in the class
  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string): void {
    // this.id = 'D2'; // Cannot assign to 'id' because it is a read-only property.ts(2540)
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('Number of Employees: ' + this.employees.length);
    console.log(this.employees);
  }
};

// creating an instance of the Department class
const accounting = new Department('D1', 'Accounting');
accounting.describe();
accounting.addEmployee('Ram');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();

/**
 * Output
 * ------
 * Department (D1): Accounting
 * Number of Employees: 2
 * ["Ram", "Max"]
 */
