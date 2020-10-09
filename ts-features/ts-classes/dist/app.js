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
var ITDepartment_ = (function (_super) {
    __extends(ITDepartment_, _super);
    function ITDepartment_() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ITDepartment_;
}(Department));
var it_ = new ITDepartment_('D1', 'it_');
it_.describe();
it_.addEmployee('Ram');
it_.addEmployee('Max');
it_.printEmployeeInformation();
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        if (admins === void 0) { admins = []; }
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
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
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (name === 'Max')
            return;
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment('D3');
accounting.addReport('Something went wrong!!');
accounting.addReport('Error rectified.');
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Ram');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map