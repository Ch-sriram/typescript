"use strict";
var Department = (function () {
    function Department(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log('Number of Employees: ' + this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
;
var accounting = new Department('D1', 'Accounting');
accounting.describe();
accounting.addEmployee('Ram');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map