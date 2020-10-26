// Besides making a normal decorator as seen previously,
// we can also make a decorator factory, which basically 
// returns a decorator function and allows us to configure it
// when we assign it as a decorator to some-construct/class

// Decorator Factory Example

// to this decorator function, we can pass in extra parameters, not only the constructor method
// we can now use the power of closure and use the params of the outer function inside the actual decorator method that's returned as seen below
function Logger(logString: string) {
  return function (constructor: Function) {
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
  return function (constructor: any) {
    const hookElement = document.getElementById(hookID)!;
    const p = new constructor(); // only works here, if it is typed as 'any'
    hookElement.innerHTML = template;
    hookElement.querySelector('h1')!.textContent = p.name;
  }
}

// this time, we call the decorator factory method, as that wil return a function, which will be a reference
// @Logger('LOGGING -- PERSON')
@WithTemplate1('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Ram';

  constructor() {
    console.log('Creating Person Instance');
  }
}

/**
 * We can build some really advanced decorators as we've seen 
 * above, which can be exposed as a 3rd party library to import
 * the decorator function and add it to the class and we can 
 * manage to render some content on the document.
 * 
 * This is how it is done in Angular, where we use @Component
 * decorator and use 'selector' and 'template' properties to 
 * make a component that is rendered on to the view, which is
 * relatively close to what we implemented here. Although, a
 * decorator in Angular Framework is more complex than the 
 * decorator here.
 */
