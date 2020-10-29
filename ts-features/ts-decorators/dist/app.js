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
function WithTemplate(template, hookID) {
    console.log('Factory: WithTemplate()');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('Decorator: @WithTemplate');
                const hookElement = document.getElementById(hookID);
                hookElement.innerHTML = template;
                hookElement.querySelector('h1').textContent = this.name;
            }
        };
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
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const person = new Person();
console.log(person);
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
const b1 = new Product('Book', 100);
const b2 = new Product('Book', 143.2);
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
const printer = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);
button.addEventListener('click', printer.showMessage.bind(printer));
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjacentDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    };
    return adjacentDescriptor;
}
class Printer2 {
    constructor() {
        this.message = 'This works with @Autobind';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer2.prototype, "showMessage", null);
const p = new Printer2();
button.addEventListener('click', p.showMessage);
//# sourceMappingURL=app.js.map