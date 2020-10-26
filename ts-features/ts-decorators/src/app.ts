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

// this time, we call the decorator factory method, as that wil return a function, which will be a reference
@Logger('LOGGING -- PERSON')
class Person {
  name = 'Ram';

  constructor() {
    console.log('Creating Person Instance');
  }
}

/**
 * Output
 * ------
 * LOGGING -- PERSON
 * class Person {
 *    constructor() {
 *      this.name = 'Ram';
 *      console.log('Creating Person Instance');
 *    }
 * }
 * Creating Person Instance
 * Person {name: 'Ram'}
 */
