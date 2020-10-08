/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  name: string; // same as: `public name: string;` -- properties/methods which are 'public' are accessible from outside the class using the class' instance.
  private employees: string[] = []; // 'private' is an access modifier that makes the property only accessible inside the class

  constructor(name: string) {
    this.name = name;
  }

  // adding a method in the class
  describe(this: Department): void {
    console.log('Department: ' + this.name);
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
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Ram');
accounting.addEmployee('Max');

accounting.name = 'MARKETING'; // possible because `name` property is public by default.

// accounting.employees[2] = 'Roop'; // error: Property 'employees' is private and only accessible within class 'Department'.ts(2341)

accounting.printEmployeeInformation();

/**
 * Output
 * ------
 * Department: Accounting
 * Number of Employees: 2
 * ["Ram", "Max"]
 */
