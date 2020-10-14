"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log('Number of Employees: ' + this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
;
var employee1 = Department.createEmployee('Roop');
console.log(employee1, Department.fiscalYear);
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        if (admins === void 0) { admins = []; }
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department -- ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var it = new ITDepartment('D2', ['Max', 'Manu']);
it.describe();
it.addEmployee('Ram');
it.addEmployee('Max');
it.printEmployeeInformation();
console.log(it);
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        if (reports === void 0) { reports = []; }
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (this.instance)
            return this.instance;
        this.instance = new AccountingDepartment('D2');
        return this.instance;
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (!this.lastReport)
                throw new Error('No report found');
            return this.lastReport;
        },
        set: function (value) {
            if (!value)
                throw new Error('Please pass in a valid value');
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (name === 'Max')
            return;
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
console.log(accounting === accounting2);
accounting.addReport('Something went wrong!!');
accounting.addReport('Error rectified.');
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Ram');
accounting.printEmployeeInformation();
accounting.describe();
//# sourceMappingURL=app.js.map