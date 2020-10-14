/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

// once a class is abstract, we cannot have any instances of that particular class.
abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];
  
  constructor(protected readonly id: string, public name: string) { 
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  
  // overriding the methods defined below is optional, but to make sure that every child class that inherits 'Department'
  // class needs to implement the describe() method, for that, we define our method as `abstract`, and for that to work, we 
  // need to make our 'Department' class as `abstract`.

  // we can call the following methods from any instance of the 'Department' class or any of its child class' instance.
  // we can also override these methods in 'Department' class by the child classes that inherit 'Department' class
  // describe(this: Department): void {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('Number of Employees: ' + this.employees.length);
    console.log(this.employees);
  }

  // `abstract` methods don't have a body, they're just declaration(s)
  abstract describe(this: Department): void;
};

const employee1 = Department.createEmployee('Roop');
console.log(employee1, Department.fiscalYear);

// class below extends 'Department' -- and so, 'ITDepartment' has to define all the abstract methods/properties
class ITDepartment extends Department {
  constructor(id: string, public admins: string[] = []) {
    super(id, 'IT'); // super() has to be called first in the child class' constructor before going ahead further
  }

  describe(this: ITDepartment): void {
    console.log('IT Department -- ID: ' + this.id);
  }
}

const it = new ITDepartment('D2', ['Max', 'Manu']);
it.describe();
it.addEmployee('Ram');
it.addEmployee('Max');
it.printEmployeeInformation();
console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter using `get` method
  get mostRecentReport() {
    if (!this.lastReport)
      throw new Error('No report found');
    return this.lastReport;
  }

  // we can use the same name for getter/setter to read/set a value as follows
  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value');
    this.addReport(value);
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  // overriding describe() method
  describe() {
    console.log('Accounting Department - ID: ' + this.id); // change `id` field to `protected` to be accessible by the child classes
  }

  // overriding addEmployee
  addEmployee(employee: string): void {
    if (name === 'Max') return;
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('D3');
accounting.addReport('Something went wrong!!');
accounting.addReport('Error rectified.');

// accessing setter as a property
accounting.mostRecentReport = 'Year End Report';

// accessing getter also as a property
console.log(accounting.mostRecentReport); // after adding a report, we won't get any error

accounting.printReports();

accounting.addEmployee('Max'); // will not be added
accounting.addEmployee('Ram'); // will be added
accounting.printEmployeeInformation();

accounting.describe();


/**
 * Output
 * ------
 * {name: "Roop"} 2020
 * 2020
 * IT Department -- ID: D2
 * Number of Employees: 2
 * > ["Ram", "Max"]
 * > ITDepartment
 *    > admins: ["Max", "Manu"]
 *    > employees: ["Ram", "Max"]
 *    id: "D2"
 *    name: "IT"
 * 2020
 * Year End Report
 * > ["Something went wrong!!", "Error rectified.", "Year End Report"]
 * Number of Employees: 2
 * > ["Max", "Ram"]
 * Accounting Department - ID: D3
 */
