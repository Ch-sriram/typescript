"use strict";
var _a;
function add_(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
const result = add_('Max', ' 1');
const result2 = add_('Ram', ' 2');
console.log(result2.split(' '));
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
const res1 = add('Sriram', 1);
console.log(res1.split(' '));
const res2 = add(5, 1);
console.log(res2);
const fetchedUserData1 = {
    id: 'u1',
    name: 'Ram',
    job: { title: 'SDE', description: 'Writes Code & Develops Apps' },
};
console.log(fetchedUserData1.job.title);
const fetchedUserData2 = {
    id: 'u2',
    name: 'Roop',
    job: { title: undefined },
};
console.log((_a = fetchedUserData2 === null || fetchedUserData2 === void 0 ? void 0 : fetchedUserData2.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map