/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  /**
   * if `employee` property of 'Department' class is private, 
   * then we cannot access it from anywhere else except from 
   * inside the 'Department' class itself. But if we make the 
   * `employees` property as protected, we can access 
   * `employees` from any subclass of the 'Department' class.
   */
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
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
  }

  // overriding addEmployee
  addEmployee(employee: string): void {
    if (name === 'Max') return;
    this.employees.push(employee); // if the `employees` was a private property, we couldn't have been able to access it in the 'AccountingDepartment' class.
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('D3');
accounting.addReport('Something went wrong!!');
accounting.addReport('Error rectified.');
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
 * > ["Something went wrong!!", "Error rectified."]
 * Number of Employees: 2
 * > ["Max", "Ram"]
 */
