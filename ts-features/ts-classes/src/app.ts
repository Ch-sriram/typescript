/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  protected employees: string[] = [];
  
  constructor(private readonly id: string, public name: string) { }
  
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
  /**
   * In TS (and JS), we have getters and setters that we can 
   * implement using the get() and set() reserved methods in 
   * a class as shown below.
   */

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

// getters are called as a property
// console.log(accounting.mostRecentReport); // before adding a report, we get an error: No report found at AccountingDepartment...
accounting.addReport('Something went wrong!!');
accounting.addReport('Error rectified.');

// we can access a setter also as a property as shown below
// accounting.mostRecentReport = ''; // error: Please pass in a valid value
accounting.mostRecentReport = 'Year End Report';

console.log(accounting.mostRecentReport); // after adding a report, we won't get any error

accounting.printReports();

accounting.addEmployee('Max'); // will not be added
accounting.addEmployee('Ram'); // will be added
accounting.printEmployeeInformation();


/**
 * Output
 * ------
 * Department (D1): Accounting
 * Number of Employees: 2
 * > ["Ram", "Max"]
 * Department (D2): IT
 * Number of Employees: 2
 * > ["Ram", "Max"]
 * > ITDepartment
 *    > admins: ["Max", "Manu"]
 *    > employees: ["Ram", "Max"]
 *    id: "D2"
 *    name: "IT"
 * Year End Report
 * > ["Something went wrong!!", "Error rectified.", "Year End Report"]
 * Number of Employees: 2
 * > ["Max", "Ram"]
 */
