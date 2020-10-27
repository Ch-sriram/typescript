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

// ACCESSOR & PARAMETER Decorators
// ACCESSORS are setters/getters; PARAMETERS are method arguments



/**
 * DECORATOR Function for Accessor in 'Product' class
 * 
 * @param target : type will be 'Prototype' if we're dealing 
 *                 with instance accessor.
 *                 type will be 'Function' if we're dealing
 *                 with a static accessor.
 *                 Therefore, it is better to assume it as of 
 *                 'any' type for simplicity.
 * 
 * @param accessorName : name of the accessor can be of   
 *                       'string' or 'Symbol' type.
 * 
 * @param descriptor : type: 'PropertyDescriptor' which is a 
 *                     built-in type of TS.
 * 
 */
function Log2(target: any, accessorName: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator: @Log2');
  console.log(target);
  console.log(accessorName);
  console.log(descriptor);
}

/**
 * DECORATOR Function for Method in 'Product' Class
 * @param target : if an instance method: type of 'target' is same as that of the 'Prototype' of the Object.
 *                 if it is a static method: type of 'target' is same as that of constructor, which is 'Function'
 *                 instead of trying to narrow down the type of 'target', we can use the 'any' type for simplicity
 * @param name : method name is always a 'string' or 'Symbol' typed value
 * @param descriptor : type of 'descriptor' is an in-built TS type known as 'PropertyDescriptor'
 * 
 * We can see that the arguments used here are same as that of 
 * the arguments in a decorator function for an accessor.
 */
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(`Method Decorator: @Log3`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

/**
 * 
 * @param target : Same type as that of method decorator mentioned above.
 * @param name : Same type as that of method decorator mentioned above. NOTE: Here, 'name' is method name, not the argument name.
 * @param position : 'number' typed data which is the index position of the argument in the internal `arguments` list of the function
 */
function Log4(target: any, name: string | Symbol, position: number) {
  console.log(`Parameter Decorator: @Log4`);
  console.log(target);
  console.log(name);
  console.log(position); // 0 => 1st parameter
}

// NOTE-1: To use a decorator, we definitely need a class, but we don't have to add all the decorators directly to the class.
// NOTE-2: Here, we're only adding Decorator(s) to the property(s) of the 'Product' class.
class Product {
  // Adding a @Log decorator to a `title` property
  @Log
  title: string;
  private _price: number;

  // Adding @Log2 decorator for `price` setter accessor
  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid price - should be positive!');
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  
  // Adding @Log3 decorator for `getPriceWithTax` method
  @Log3
  getPriceWithTax(@Log4 tax: number) { // Adding @Log4 decorator for `tax` parameter
    return this._price * (1 + tax);
  }
}

// When do property decorators execute? same as when our class
// decorators execute i.e., as soon as the class definition
// is parsed by TS/JS (not when an instance of the class is 
// created).

/**
 * Output
 * ------
 * app.ts:11 Factory: Logger()
 * app.ts:45 Factory: WithTemplate2()
 * app.ts:47 Decorator: @WithTemplate2
 * app.ts:76 Creating Person Instance
 * app.ts:13 Decorator: @Logger
 * app.ts:14 LOGGING -- PERSON
 * app.ts:15 class Person {
 *             constructor() {
 *               this.name = 'Ram';
 *               console.log('Creating Person Instance');
 *             }
 *           }
 * app.ts:97 Property Decorator: @Log
 * app.ts:98 > {constructor: ƒ, getPriceWithTax: ƒ}
 *             > constructor: class Product
 *             > getPriceWithTax: ƒ getPriceWithTax(tax)
 *             > set price: ƒ price(val)
 *             > __proto__: Object
 * app.ts:99 title
 * app.ts:125 Accessor Decorator: @Log2
 * app.ts:126 > {constructor: ƒ, getPriceWithTax: ƒ}
 *              > constructor: class Product
 *              > getPriceWithTax: ƒ getPriceWithTax(tax)
 *              > set price: ƒ price(val)
 *              > __proto__: Object
 * app.ts:127 price
 * app.ts:128 > {get: undefined, enumerable: false, configurable: true, set: ƒ}
 *                configurable: true
 *                enumerable: false
 *                get: undefined
 *              > set: ƒ price(val)
 *              > __proto__: Object
 * app.ts:156 Parameter Decorator: @Log4
 * app.ts:157 > {constructor: ƒ, getPriceWithTax: ƒ}
 *              > constructor: class Product
 *              > getPriceWithTax: ƒ getPriceWithTax(tax)
 *              > set price: ƒ price(val)
 *              > __proto__: Object
 * app.ts:158 getPriceWithTax
 * app.ts:159 0
 * app.ts:143 Method Decorator: @Log3
 * app.ts:144 > {constructor: ƒ, getPriceWithTax: ƒ}
 *              > constructor: class Product
 *              > getPriceWithTax: ƒ getPriceWithTax(tax)
 *              > set price: ƒ price(val)
 *              > __proto__: Object
 * app.ts:146 > {writable: true, enumerable: false, configurable: true, value: ƒ}
 *                configurable: true
 *                enumerable: false
 *              > value: ƒ getPriceWithTax(tax)
 *                writable: true
 *              > __proto__: Object
 */
