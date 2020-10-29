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
const registeredValidators = {};
function Required(target, propName) {
    `
  'target' contains the 'constructor' property which contains the 'length' and 'name' property, where 'name' is the name of the class on which this decorator was called on.

  Therefore, 'target.constructor.name' is "Course" in this 
  case. In this case, 'propName' is "title"
  `;
    const validators = registeredValidators[target.constructor.name]?.[propName] ?? [];
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...validators, 'required'],
    };
}
function PositiveNumber(target, propName) {
    `In this case, 'propName' is "price"`;
    const validators = registeredValidators[target.constructor.name]?.[propName] ?? [];
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...validators, 'positive'],
    };
}
function validate(obj) {
    `
  'obj' we pass here is the instance of 'Course' class, which 
  will have a 'constructor' property and that 'constructor' 
  property has the 'name' property which is the name of the 
  class - "Course".
  `;
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    `
  {
    title: ['required'],
    price: ['positive'],
  }
  `;
    if (!objectValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objectValidatorConfig) {
        `
    prop: string[] -- prop is a string array, so we iterate
                      through it using the for..of loop.
    `;
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid &&= (!!obj[prop]);
                    break;
                case 'positive':
                    isValid &&= (obj[prop] > 0);
                    break;
                default: break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Required,
    PositiveNumber
], Course.prototype, "price", void 0);
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = +document.getElementById('price').value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map