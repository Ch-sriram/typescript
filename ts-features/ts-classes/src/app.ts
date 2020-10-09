/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  private employees: string[] = [];
  
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

/**
 * We can extend the 'Department' class and make a new subclass
 * named 'ITDepartment' which inherits properties and methods
 * from the 'Department' class, but now, 'ITDepartment' has its
 * own methods/properties as follows:
 */

class ITDepartment_ extends Department {}

// creating an instance of the ITDepartment_ class
const it_ = new ITDepartment_('D1', 'it_'); // uses the super class' constructor to instantiate the instance for 'ITDepartment_' object.
it_.describe();
it_.addEmployee('Ram');
it_.addEmployee('Max');
it_.printEmployeeInformation();

/**
 * Inside the 'ITDepartment' class, we can add our own 
 * constructor, but that constructor should call base/super 
 * class' constructor using the super() keyword and pass in 
 * all the required parameters.
 */

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

/**
 * We can now also create a separate department for Accounting
 * as shown below.
 */
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
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
 * > ["Something wen wrong!!", "Error rectified."]
 */
