"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('Factory: Logger()');
    return function (constructor) {
        console.log('Decorator: @Logger');
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
    console.log('Factory: WithTemplate2()');
    return function (constructor) {
        console.log('Decorator: @WithTemplate2');
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
    Logger('LOGGING -- PERSON'),
    WithTemplate2('<h1>My Person Object</h1>', 'app')
], Person);
function Log(target, propName) {
    console.log('Property Decorator: @Log');
    console.log(target);
    console.log(propName);
}
function Log2(target, accessorName, descriptor) {
    console.log('Accessor Decorator: @Log2');
    console.log(target);
    console.log(accessorName);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log(`Method Decorator: @Log3`);
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log(`Parameter Decorator: @Log4`);
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error('Invalid price - should be positive!');
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map