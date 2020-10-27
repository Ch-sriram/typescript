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
 */
