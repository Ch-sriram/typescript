/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  // we need not write all this jargon below here
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // By using the constructor parameters itself, we can define and initialize the properties in the constructor's params itself.
  constructor(private id: string, public name: string) {
    // we don't need to even separately assign which we did below 
    // this.id = id;
    // this.name = name;
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
 * Output
 * ------
 * Department (D1): Accounting
 * Number of Employees: 2
 * ["Ram", "Max"]
 */
