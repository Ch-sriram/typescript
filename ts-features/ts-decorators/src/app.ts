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

/**
 * In order to do more advanced things with the decorator, 
 * we've to understand that some decorators, like, class and 
 * method decorators, actually are also capable of returning
 * something.
 * 
 * NOTE that we're not talking about a decorator function that
 * gets returned from a decorator factory. What we really mean
 * is that the decorator function itself returns something 
 * (which modifies the class' constructor or class' method(s)).
 * 
 * In our WithTemplate decorator factory, we're returning a 
 * decorator that gets added to a class. In such a decorator 
 * function, we can return a new constructor function which 
 * will replace the old constructor function of the class on 
 * which we want to add the decorator on.
 * 
 * Therefore, here we can return a new constructor function, or
 * a new class that extends the old constructor and then inside
 * the new class, we'll modify the old constructor by creating
 * our own constructor inside the decorator.
 */

/**
 * For the following template type:
 *  <T extends {new(...args: any[]): {name: string}}>
 * meaning is: T can only be of the form of an object (which 
 * is 'new'-able, i.e., which can be made into an object by 
 * using the `new` keyword => it has constructor function) 
 * whose constructor function can take any number of arguments
 * of any type, and such an object always returns an object 
 * which has the `name` property which is of type 'string'.
 * If we don't return an object with `name` property, we won't
 * be able to refer to `name` inside the generic decorator 
 * function as seen below (viz... `this.name` in line 114).
 *
 * Because the generic function has the constructor to take in
 * any number of arguments (viz: new(...args: any[])), it means
 * that the constructor also has to take in any no. of 
 * arguments, as seen below when defining the constructor of 
 * the anonymous class, which has `constructor(..._: any[])`.
 * 
 * NOTE that we have `..._: any[]` instead of `...args: any[]`,
 * because `..._` means that the TS should ignore warnings of 
 * the `_` variable to be actually used inside the constructor.
 */

/**
 * One thing to remember is that, since this decorator returns 
 * a class, modifying the old constructor with the new one, 
 * this decorator only runs when a new instance of the class is
 * created, as seen below.
 * 
 * If we wanted to, we could've not extended the 
 * originalConstructor from 'Person' class -- thereby 
 * overriding the original constructor with the one we defined
 * in the decorator in the anonymous class that we returned.
 */

function WithTemplate(template: string, hookID: string) {
  console.log('Factory: WithTemplate()');
  // we need this decorator function to be generic because types won't match when calling this decorator factory
  return function <T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Decorator: @WithTemplate');
        const hookElement = document.getElementById(hookID)!;
        // const p = new originalConstructor(); // we don't need to call our original constructor here, as we're inside the extended class - and so, we can use `this` to refer to properties/methods of this particular class
        hookElement.innerHTML = template;
        hookElement.querySelector('h1')!.textContent = this.name;
      }
    }
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
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Ram';

  constructor() {
    console.log('Creating Person Instance');
  }
}

// if we don't instantiate an object of the class, we won't see
// the execution of the @WithTemplate Decorator.
const person = new Person(); // if commented, we won't get 'Ram' in the output
console.log(person);

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

/**
 * We can return values in other decorators other than class
 * decorators. The decorators where we can return something are
 * the decorators we add to methods and accessors.
 * 
 * Here, in the class 'Product', we can return something from
 * the method decorator (@Log3) and accessor decorator (@Log2)
 * and TS will use it.
 * 
 * The decorators on properties (@Log) and parameters (@Log4)
 * also can return something, but TS will ignore it. Therefore,
 * for property/parameter decorators, return value is not used
 * and not considered by TS.
 * 
 * But what can be returned by a method/accessor decorator?
 * --------------------------------------------------------
 * We can return a new Property Descriptor, i.e., Log2 and Log3
 * (which are the method & accessor decorator) both get the 
 * `descriptor` of the property/method that the decorator is
 * attached to. Now, PTR is, Property Descriptor is a concept
 * from JavaScript (look into: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
 * where the descriptor is different for a method and for an
 * accessor i.e.,
 * - Property Descriptor for Accessor (i.e., @Log2):
 *    > {get: undefined, enumerable: false, configurable: true, set: ƒ}
 *        configurable: true
 *        enumerable: false
 *        get: undefined
 *      > set: ƒ price(val)
 *      > __proto__: Object
 * 
 * - Property Descriptor for Method (i.e., @Log3):
 *    > {writable: true, enumerable: false, configurable: true, value: ƒ}
 *        configurable: true
 *        enumerable: false
 *      > value: ƒ getPriceWithTax(tax)
 *        writable: true
 *      > __proto__: Object
 * 
 * For more information, look into "Object.defineProperty()"
 * from MDN. Therefore, we can return a Property Descriptor
 * from any of the method or accessor decorators, where we 
 * can set the respective properties of the descriptor as we 
 * want them to.
 * Example: Setting the enumerable to true in @Log2 decorator
 *  function Log2(target: any, accessorName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
 *    console.log('Accessor Decorator: @Log2');
 *    console.log(target);
 *    console.log(accessorName);
 *    console.log(descriptor);
 *    return {
 *      enumerable: true,
 *      get: function price() {
 *        return this._price;
 *      }
 *    }
 *  }
 *  
 */

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
 * What's the execution order of decorators?
 * -----------------------------------------
 * Before knowing the order of execution of decorators, it is 
 * important to understand that decorators do not depend on the
 * instance creation of the class, running of the decorator 
 * depends on parsing the class, i.e., creation of the instance
 * of 'Product' class doesn't make the decorators run again.
 * 
 * All the decorators -- Class, Property, Method, Accessor & 
 * Parameter Decorators, all of them execute when we define the
 * class, they don't run at runtime, instead, decorators allow
 * the developers to do additional behind the scenes setup 
 * work when a class is defined, and that's the core use-case
 * behind using a meta programming concept like decorators.
 */

// 'Product' class object instantiation doesn't trigger any decorators to be executed
const b1 = new Product('Book', 100);
const b2 = new Product('Book', 143.2);

/**
 * Output
 * ------
 * app.ts:11 Factory: Logger()
 * app.ts:104 Factory: WithTemplate()
 * app.ts:13 Decorator: @Logger
 * app.ts:14 LOGGING -- PERSON
 * app.ts:15 class extends originalConstructor {
 *              constructor(..._) {
 *                super();
 *                console.log('Decorator: @WithTemplate');
 *                const hookElement = document.getElementById(hookID)!;  
 *                hookElement.innerHTML = template;
 *                hookElement.querySelector('h1)!.textContent = this.name;
 *              }
 *            }
 * app.ts:141 Creating Person Instance
 * app.ts:110 Decorator: @WithTemplate
 * app.ts:148 {name: "Ram"}
 * app.ts:167 Property Decorator: @Log
 * app.ts:168 {constructor: ƒ, getPriceWithTax: ƒ}
 * app.ts:169 title
 * app.ts:195 Accessor Decorator: @Log2
 * app.ts:196 {constructor: ƒ, getPriceWithTax: ƒ}
 * app.ts:197 price
 * app.ts:198 {get: undefined, enumerable: false, configurable: true, set: ƒ}
 * app.ts:226 Parameter Decorator: @Log4
 * app.ts:227 {constructor: ƒ, getPriceWithTax: ƒ}
 * app.ts:228 getPriceWithTax
 * app.ts:229 0
 * app.ts:213 Method Decorator: @Log3
 * app.ts:214 {constructor: ƒ, getPriceWithTax: ƒ}
 * app.ts:215 getPriceWithTax
 * app.ts:216 {writable: true, enumerable: false, configurable: true, value: ƒ}
 */

///////////////////////////////////////////////////////////////
// Method Decorator Returning Descriptor Example
// For this, we'll create a button in 'index.html'

class Printer {
  message = 'This works!';

  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage); // undefined -- because for an event listener, whenever we point to a function that should be executed, the `this` keyword inside of that function will not have the same context compared to just calling `printer.showMessage()`
// in case of an event listener, the `this` refers to the target of the event and not the reference that calls the function.

// To get around this problem, we can explicitly use the bind()
// method to bind the `this` of the event listener to the 
// context of the 'printer' object as follows:
button.addEventListener('click', printer.showMessage.bind(printer)); // This works!

// But another way to get around this problem is to make a 
// method decorator that can be added to showMessage() method
// to automatically bind `this` to the surrounding class every
// time the showMessage() is called, no matter where we call it

// this is the method decorator that we'll apply to the 'Printer2' class' showMessage() method below.
function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  // descriptor contains 'value' property which has the function that the 'Autobind' decorator is applied on
  const originalMethod = descriptor.value;
  const adjacentDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this); // `this` refers to the object on which we defined the getter method i.e., `get()` method.
      return boundFunction;
    }
  };
  return adjacentDescriptor;
}

class Printer2 {
  message = 'This works with @Autobind';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer2();
button.addEventListener('click', p.showMessage); // This works with @Autobind


///////////////////////////////////////////////////////////////
// VALIDATION WITH DECORATORS
// class _Course {
//   title: string;
//   price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }
// }

/**
 * To instantiate the instance of the 'Course' class, we've to
 * send in valid `title` and valid `price` properties into 
 * the constructor when instantiating the 'Course' class' 
 * object.
 * 
 * But a common scenario we might encounter in some 
 * applications is that we fetch data (let's say from a web
 * resource) and we get data where we've a couple of courses
 * instantiated from the 'Course' class' instance or in another
 * scenario, we let the users enter the data, and we assume it
 * is always right, but we don't know what the user is 
 * entering, we're not guaranteed that the entered data is 
 * valid. Therefore, we would like to validate the input.
 * 
 * That's the scenario we'll fake here. In our 'index.html' 
 * file, we can have a simple form which we submit, and before
 * submitting the form, we should be able to validate it 
 * properly.
 * 
 * For that, we can use decorators as follows:
 */

// const _courseForm = document.querySelector('form')!;
// _courseForm.addEventListener('submit', event => {
//   event.preventDefault(); // when we submit the form, prevent the default operation, which to send data using GET/POST method

//   // extract the data from the `title`
//   const title = (document.getElementById('title') as HTMLInputElement).value;
//   const price = +(document.getElementById('price') as HTMLInputElement).value; // instead of parseInt(), we can simply add a '+' in front of the value and it would be converted to a 'number' typed data.

//   const createdCourse = new _Course(title, price);
//   console.log(createdCourse);
// });

/**
 * In the courseForm method above, we're simply taking any 
 * kind of input from the form and saving that information
 * without validating the information.
 * 
 * For example, the form can take in Courses with `title = ""`
 * and `price = 0`. Any kind of input can be given as input, 
 * and it will be accepted.
 * 
 * What we want is to validate the data before saving it.
 * We can ofcourse validate the data inside the courseForm's
 * event before creating the object itself.
 * 
 * But that means that whenever we create a new instance of the
 * 'Course' object, we've to add the validation logic inside
 * the courseForm's event. But, wouldn't it be nice to have
 * the validation logic included in the 'Course' class with the
 * help of decorators.
 * 
 * Therefore, we would use 2 decorator methods, which are 
 * Required() and PositiveNumber(), which are added to the 
 * respective properties of the class which we would like to
 * have them validated.
 * 
 * And then we can write code for a validate() method, which
 * will run after creating the instance for 'Course' class with
 * the 'Course' class' instance as a parameter.
 */

// interface for storing the validators
interface ValidatorConfig {
  // [property: string]: {} is the class name to which the validator config is attached to
  [property: string]: {
    // In [validatableProp: string], validatableProp is the name of the property on which the validator is acting on. In this case, validatableProp can be `title` and `price`
    [validatableProp: string]: string[] // list of validators - Example: ['required', 'positive', ...]
  }
}

// now we can create our registered validator config here, 
// which is initially an empty object, because when the 3rd 
// party application gets loaded, we will see that no 
// validator has been registered yet.
const registeredValidators: ValidatorConfig = {};

// Common Property Decorator Utility Method
function addValidator(target: any, propName: string, validator: string) {
  const validators = registeredValidators[target.constructor.name]?.[propName] ?? [];
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...validators, validator],
  }
}

// Property Decorator
`
'target' contains the 'constructor' property which contains 
the 'length' and 'name' property, where 'name' is the name of 
the class on which this decorator was called on.

Therefore, 'target.constructor.name' is "Course" in this 
case. In this case, 'propName' is "title"
`
const Required = (target: any, propName: string) => addValidator(target, propName, 'required');
const Positive = (target: any, propName: string) => addValidator(target, propName, 'positive');

// Validator Method
function validate(obj: any) {
  `
  'obj' we pass here is the instance of 'Course' class, which 
  will have a 'constructor' property and that 'constructor' 
  property has the 'name' property which is the name of the 
  class - "Course".
  `
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  // registeredValidators[obj.constructor.name] gets us the object which has the following properties (in this case):
  `
  {
    title: ['required'],
    price: ['positive'],
  }
  `

  // if there's no validator configuration, then return true without checking for validation
  if (!objectValidatorConfig) {
    return true;
  }

  // use for..in loop to iterate through each property in the 
  // validator config and for each type of config, check the 
  // validation of the corresponding property against the 
  // validation logic.
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    `
    prop: string[] -- prop is a string array, so we iterate
                      through it using the for..of loop.
    `
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid &&= (!!obj[prop]); // return true if the value is non-empty: `obj[prop]` will be false if it contains an empty string i.e., ''.
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


// Our class on which we apply our property decorators
class Course {
  @Required title: string;
  @Required @PositiveNumber price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}


document.querySelector('form')!.addEventListener('submit', event => {
  event.preventDefault();
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const price = +(document.getElementById('price') as HTMLInputElement).value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }

  console.log(createdCourse);
});
