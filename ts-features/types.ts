// EXAMPLE OF A PREDEFINED JS FUNCTION USED IN TS

// a variable that points to the instance of the Date() object
const today = new Date(); // when we hover on `today`, we'll see that TS automatically shows us that, `today` is of type `Date` with the following syntax: `const today: Date`

/**
 * Because of TS knowing the type of the variable we have, we 
 * can get autocomplete information pretty easily, by typing in
 * `today.` (`today` with a . (dot) operator), we'll be able to
 * see all the methods and properties that are available for
 * particular instance of the `Date` type object.
 */

today.getDate(); // no error, because TS knows the internal definition of `Date`.
// today.askdlbad; // error, because `Date` typed object doesn't have `askdlbad` property/method


// EXAMPLE OF USER-DEFINED OBJECTS
const person = {
  age: 20
};

/**
 * When we hover on the `person` variable, we will see the 
 * entire schema of the person object that TS inferred as 
 *    `const person: { age: number; }`
 * Because here, we haven't defined an interface for the 
 * `person` object.
 */

person.age; // no error, because `age` property exists in `person`
// person.asdl; // error, because TS knows that `asdl` is not known to the `person` object, implicitly.

class Color {};
const red = new Color(); // hover over "red" object, TS knows that it is of type `Color`, and we see that the type is `const red: Color`

// red.abcd; // error because TS knows that the instance of the class Color, doesn't have a property/method named `abcd`.
