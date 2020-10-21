"use strict";
function add_(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
var result = add_('Max', ' 1');
var result2 = add_('Ram', ' 2');
console.log(result2.split(' '));
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
var res1 = add('Sriram', 1);
console.log(res1.split(' '));
var res2 = add(5, 1);
console.log(res2);
//# sourceMappingURL=app.js.map