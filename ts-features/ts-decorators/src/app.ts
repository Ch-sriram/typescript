// Besides making a normal decorator as seen previously,
// we can also make a decorator factory, which basically 
// returns a decorator function and allows us to configure it
// when we assign it as a decorator to some-construct/class

// Decorator Factory Example

// to this decorator function, we can pass in extra parameters, not only the constructor method
// we can now use the power of closure and use the params of the outer function inside the actual decorator method that's returned as seen below
function Logger(logString: string) {
  console.log('Factory: Logger()');
  return function (constructor: Function) {
    console.log('Decorator: @Logger');
    console.log(logString);
    console.log(constructor);
  }
}

/**
 * With Factory Patterned Decorators, we can do some 
 * interesting stuff, like the 'WithTemplate1' Decorator below:
 */
/**
 * 
 * @param template : HTML code
 * @param hookID : actual id of an HTML element inside the targeted HTML document
 */
function WithTemplate1(template: string, hookID: string) {
  return function (_: Function) {
    // instead of 'target' or 'constructor', we can use '_' as a param, since TS will not raise an error if it is not used inside the anonymous function if we '_' as the param name
    const hookElement = document.getElementById(hookID)!;
    hookElement.innerHTML = template;
  }
}

// we can call the WithTemplate1() factory decorator below, before the definition of 'Person' class.

/**
 * We can also use the name inside the 'Person' class from 
 * inside the decorator and render the name onto the view as 
 * follows:
 */

function WithTemplate2(template: string, hookID: string) {
  console.log('Factory: WithTemplate2()');
  return function (constructor: any) {
    console.log('Decorator: @WithTemplate2');
    const hookElement = document.getElementById(hookID)!;
    const p = new constructor(); // only works here, if it is typed as 'any'
    hookElement.innerHTML = template;
    hookElement.querySelector('h1')!.textContent = p.name;
  }
}

// We can add any number of decorators to be run before the 
// class the is defined. For instance, we are adding the 
// @Logger decorator before the 'Person' class.
//
// NOTE 1: The order of execution of the decorators will be 
//         Bottom Up, i.e., in this case, @WithTemplate1 
//         decorator wil execute before @Logger decorator.
//
// Note 2: NOTE 1 talks about the order of execution of the 
//         class decorators, not the order of execution of
//         decorator factories (i.e., functions that return 
//         the actual decorators -- which are used in this 
//         case) which are executed as per JS/TS function 
//         execution policy (i.e., functions get executed as 
//         soon as they're called) i.e., Top to Bottom.
@Logger('LOGGING -- PERSON')
@WithTemplate2('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Ram';

  constructor() {
    console.log('Creating Person Instance');
  }
}

// PROPERTY DECORATORS -- Decorators added constructs other than a class.

/**
 * Decorator to a class property receives two arguments. 
 * 
 * @param target : if it is of instance type, then the type of 
 *                 the target will be prototype of the object 
 *                 that got created. If it was a static 
 *                 property, 'target' would refer to the 
 *                 constructor function instead. Therefore 
 *                 taking 'any' would be better.
 * 
 * @param propName: can be a 'string' or a 'Symbol', as we 
 *                  don't know what we use as a property name.
 * 
 */
function Log(target: any, propName: string | Symbol) {
  console.log('Property Decorator: @Log');
  console.log(target);
  console.log(propName);
}

// NOTE-1: To use a decorator, we definitely need a class, but we don't have to add all the decorators directly to the class.
// NOTE-2: Here, we're only adding Decorator(s) to the property(s) of the 'Product' class.
class Product {
  // Adding a @Log decorator to a `title` property
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid price - should be positive!');
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// When do property decorators execute? same as when our class
// decorators execute i.e., as soon as the class definition
// is parsed by TS/JS (not when an instance of the class is 
// created).

/**
 * Output:
 * ------
 * Factory: Logger()                          app.ts:11
 * Factory: WithTemplate2()                   app.ts:45
 * Decorator: @WithTemplate2                  app.ts:47
 * Creating Person Instance                   app.ts:76
 * Decorator: @Logger                         app.ts:13
 * LOGGING -- PERSON                          app.ts:14
 * class Person {                             app.ts:15
 *    constructor() {
 *      this.name = 'Ram';
 *      console.log('Creating Person Instance');
 *    }
 * }
 * Property Decorator: @Log                   app.ts:97
 * > {constructor: f, getPriceWithTax: f}     app.ts:98
 *   > constructor: class Product
 *   > getPriceWithTax: f getPriceWithTax(tax)
 *   > set priceL f price(val)
 * title                                      app.ts:99
 */
