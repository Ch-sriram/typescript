"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate1(template, hookID) {
    return function (_) {
        const hookElement = document.getElementById(hookID);
        hookElement.innerHTML = template;
    };
}
function WithTemplate2(template, hookID) {
    return function (constructor) {
        const hookElement = document.getElementById(hookID);
        const p = new constructor();
        hookElement.innerHTML = template;
        hookElement.querySelector('h1').textContent = p.name;
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Ram';
        console.log('Creating Person Instance');
    }
};
Person = __decorate([
    WithTemplate1('<h1>My Person Object</h1>', 'app')
], Person);
//# sourceMappingURL=app.js.map