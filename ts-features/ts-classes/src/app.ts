// INDEX PROPERTIES
/**
 * This is a feature that helps us write flexible code wrt 
 * types. Index Properties is a TS feature that allows us to 
 * create objects which are more flexible regarding the 
 * properties they might hold.
 * 
 * Let's say we are writing an application where we are 
 * validating some user input. So, we've multiple input fields
 * and depending on what the user enters in different kinds of
 * fields, we might want to store and eventually show different
 * error messages.
 * 
 * Example: if we've an 'email' field, then we might want to 
 * show the proper error message to some error container.
 * 
 * But, in general, we are not aware of the no.of fields that 
 * are there in the user input, i.e., see the below example.
 */

interface ErrorContainer {
  /**
   * Objective is to create error identifiers which could be
   * the id of the input field to which the error belongs and
   * then some error string.
   * 
   * Example: { email: 'Not a valid email', userName: 'Must start with a character!' }
   * 
   * Something of the sort shown in the example above should be
   * stored in this 'ErrorContainer', but the problem is, we 
   * don't know in advance, which exact property names we can
   * have in the user's input form. We can definitely have
   * 'email' and 'userName' fields in the input form, but we
   * don't want to be specific like that, we want to be able to
   * create an ErrorContainer type object for all general 
   * forms i.e., we want this object type to be flexible, 
   * different forms with different inputs with different 
   * inputs different identifiers.
   * 
   * Moreover, if the form only has 'email' and no 'userName',
   * in that case, for a specific container type, we'll be 
   * definitely putting the `userName` as 'null', but a better
   * option would be to not even consider that.
   * 
   * So the one stop solution for that is to use the
   * Index Properties feature provided by TS.
   */
  [inputField: string]: string; // 'inputField' can be any name; for a property we can have 'string's, 'number's or 'symbol's as a property. Meaning: whatever object we're creating wrt ErrorContainer interface, must've property names of 'string' type and the respective values should also be a 'string'.
}

const errorBag: ErrorContainer = {
  // email: 1, // Type 'number' is not assignable to type 'string'.ts(2322). app.ts(48, 3): The expected type comes from this index signature.
  email: 'Not a valid email', // no error
  userName: 'Must start with a capital character!',
  1: 'This is 1 (one)', // no error: because `1` is interpreted by TS as a string
  $: 'This is $ (Dollar)', // no error: `$` is interpreted by TS as a string
};

// we can also use other properties wrt to a container of type
// of index properties
interface ErrorContainer2 {
  id: string; // cannot have property returning anything other than 'string' because below this property, we've an index property which expects a 'string' type data
  [prop: string]: string; // because of this index property, all the other specific properties need to of type 'string'
  // phone: number; // Property 'phone' of type 'number' is not assignable to string index type 'string'.ts(2411)
}

const inputError: ErrorContainer2 = {
  // id: 20; // Type 'number' is not assignable to type 'string'.ts(2322). app.ts(65, 3): The expected type comes from property 'id' which is declared here on type 'ErrorContainer2'
  id: 'f5432',
  name: 'name is invalid',
  password: 'password is invalid',
  isUser: 'no such user',
};
