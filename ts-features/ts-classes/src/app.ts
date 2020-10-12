/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

/**
 * Another feature related to properties and methods in a class
 * (which also exists for TS & JS) are the static methods/
 * properties -- which allow us to add properties/methods to 
 * the class which need not be accessed by the instance of the
 * class, but by accessing these properties/methods directly on
 * the class.
 * 
 * static methods/properties are often used for utility 
 * functions that we want to group or map to a class logically,
 * or to a global constants which we also want to store in a 
 * class.
 * 
 * Example static method/property built into JS is the 
 * `Math.PI` static property and `MATH.pow()` static method 
 * which can be accessed directly on the class itself, and so
 * the class name acts more as a namespace, as a grouping 
 * mechanism here (i.e, `Math` is the class name where we find
 * PI, pow(), etc static properties/methods -- and so, `Math`
 * is kind of a namespace/grouping-mechanism).
 * 
 * Let's say on the 'Department' class we want to add a static 
 * method that helps us create employees. Not only methods, we
 * can obviously create static properties as follows
 */

class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];
  
  constructor(private readonly id: string, public name: string) { 
    // console.log(this.fiscalYear); // error: Property 'fiscalYear' is a static member of type 'Department'.ts(2576)
    // we cannot access a static member from a non-static method using the instance of `this` particular class, but we can do so using the class' name, as we have done from Math.pow() or Math.PI
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  
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

const employee1 = Department.createEmployee('Roop');
console.log(employee1, Department.fiscalYear);

class ITDepartment_ extends Department {}

const it_ = new ITDepartment_('D1', 'it_');
it_.describe();
it_.addEmployee('Ram');
it_.addEmployee('Max');
it_.printEmployeeInformation();

class ITDepartment extends Department {
  constructor(id: string, public admins: string[] = []) {
    super(id, 'IT'); // super() has to be called first in the child class' constructor before going ahead further
  }
}

// creating an instance of the ITDepartment_ class
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


/**
 * Output
 * ------
 * {name: "Roop"} 2020
 * 2020
 * Department (D1): Accounting
 * Number of Employees: 2
 * > ["Ram", "Max"]
 * 2020
 * Department (D2): IT
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
 */
