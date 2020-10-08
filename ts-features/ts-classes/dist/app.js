"use strict";
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
;
var accounting = new Department('Accounting');
accounting.describe();
var accountingCopy = { describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map