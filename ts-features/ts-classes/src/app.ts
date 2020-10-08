/**
 * Assume that we are making an internal tooling for a company
 * which requires Department details and for that, we need to 
 * make a Department class.
 */

class Department {
  name: string; // property definition in class using ESNext syntax
  employees: string[] = [];

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

/**
 * The problem we have here is that we can change the 
 * `employees[]` array directly from outside the class using
 * an instance of the class as shown below:
 */

accounting.employees[2] = 'Roop';

/**
 * In general, we should not allow the access to properties/
 * data of a class directly to the instance. We should only 
 * allow the data change through a function or if we want to 
 * be even stricter, we don't provide access to the property
 * at all. 
 * 
 * In our case, `employees[]` array can be accessed directly 
 * through its instance and can be changed at will. What if
 * we try to add the employee to the `employees[]` array 
 * without using the addEmployee() method?
 *    It's NOT a good practice because, what if, inside the
 * addEmployee() method --- we've some checks we make before
 * actually adding the employee to the `employees[]` method?
 * 
 * If that's the case, then adding an employee without using 
 * a function is really a bad thing for the system.
 * 
 * And so, we don't want to permit the access to the 
 * `employees[]` array outside the class. And we can do that
 * using the 'private' keyword, which we'll see next.
 */

accounting.printEmployeeInformation();

/**
 * Output
 * ------
 * Department: Accounting
 * Number of Employees: 2
 * ["Ram", "Max", "Roop"]
 */
