/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

/**
 * There's a pattern in OOP which is called Singleton Pattern.
 * The singleton pattern ensures that there's only a single
 * instance available for the class, meaning, we might not
 * be able to make many instances of a single class, we can 
 * only make one instance of the class, and at the same time
 * we make sure that we can create no other instances of that
 * class.
 * 
 * To achieve this, we need to create a private constructor 
 * because of which, we can create the instance of the class
 * only from inside the class. To give access to the created 
 * instance, we can create a static method which returns the 
 * instance of the class, and that instance is also a static
 * property which is also private.
 * 
 * We can make sure that all this happens, only for the 
 * 'AccountingDepartment' class.
 */

abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];
  
  constructor(protected readonly id: string, public name: string) { 
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

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
  private static instance: AccountingDepartment;
  
  // if we make this `private`, we can only call it from inside this class
  private constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  // make a static method that returns the instance for 'AccountingDepartment'
  static getInstance() {
    if (this.instance) return this.instance; // return AccountingDepartment.instance
    this.instance = new AccountingDepartment('D2');
    return this.instance; // return AccountingDepartment.instance
  }

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

// const accounting = new AccountingDepartment('D3'); // error: Constructor of class 'AccountingDepartment' is private and only accessible within the class declaration.ts(2673)

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting === accounting2); // true -- because 'AccountingDepartment' is a singleton class

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
 * true
 * Year End Report
 * > ["Something went wrong!!", "Error rectified.", "Year End Report"]
 * Number of Employees: 2
 * > ["Max", "Ram"]
 * Accounting Department - ID: D2
 */
