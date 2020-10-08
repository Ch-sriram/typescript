/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  // As the properties increase, we need to also do more work in initializing the constructor
  private id: string;
  private name: string;
  private employees: string[] = [];

  // if there are a lot of properties above, we need to write more code inside the constructor to just initialize the properties
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  // adding a method in the class
  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string): void {
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
 * We can use the shorthand initialization which we will see 
 * next, so that we can get rid of those extra lines in the 
 * constructor function.
 */

/**
 * Output
 * ------
 * Department (D1): Accounting
 * Number of Employees: 2
 * ["Ram", "Max"]
 */
