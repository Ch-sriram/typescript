// TYPE CASTING
// Helps us tell TS that some value is of a specific type where
// TS is unable ot detect the type of that respective value, on
// its own, but we as the developer knows the type of the value

// Ex.1 Getting access to something in DOM
// Please check 'index.html' for the HTMLElements we are accessing here

// we can access the paragraph as follows:
const paragraph = document.querySelector('p'); // hover over 'paragraph' and we see: const paragraph: HTMLParagraphElement | null

// Important thing in lin #10 is that, TS knows that the 
// `paragraph`'s type is 'HTMLParagraphElement' because we 
// selected `paragraph` using the tag itself ('p').

// but if we try and access an HTML element using its class or
// id as shown below:
const para = document.getElementById('message-output'); // hover on 'para' and TS infers: const para: HTMLElement | null

// we can clearly see that TS is unable to infer that 'para' is
// of type 'HTMLParagraphElement'. 

/**
 * But for a <p> element, it doesn't matter much because with 
 * a <p> element (or any other normal HTMLElement) we can do 
 * the same things as we do with normal elements. And so, there
 * are very little properties/methods that are specific to the
 * <p> tag/element.
 */

// But what if we are using the <input /> element?
// In the <input /> element, we have the 'value' property, 
// which is not present in a normal 'HTMLElement', but only 
// present in 'HTMLInputElement' type as shown below.
const userInputElement = document.getElementById('user-input'); // TS infers this element as 'HTMLElement' and not as 'HTMLInputElement'
// userInputElement.value = 'Hi there!'; // Property 'value' does not exist on type 'HTMLElement'.ts(2339)

// And so, we have to explicitly tell TS that the element we are getting from the DOM is of 'HTMLInputElement' type explicitly in 2 ways:

// 1. Using <> (angular bracket) syntax -- not supported when using React
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input');
userInputElement1.value = 'Hi there!';

// 2. Using the `as` keyword -- supported also when using React
const userInputElement2 = document.getElementById('user-input') as HTMLInputElement;
userInputElement2.value = 'Hey Yo!';

// One more good practice is to use the '!' (exclamation mark)
// symbol at the end of the statement before completing the
// statement, to tell the TS compiler that there will be an
// element for sure, and it won't be 'null'. Demo below.
const userInputElement3 = document.getElementById('user-input')! as HTMLInputElement; // TS will infer that `userInputElement3` won't be 'null'

// if we don't know whether the DOM element we are accessing
// might or might not be 'null', in that case, we declare and
// define it as shown below (without `!` symbol and using the
// `if` statement to check whether the element is 'null' or not)
const userInputElement4 = document.getElementById('user-input');
if (userInputElement4) {
  // userInputElement4.value = 'Hi there!'; // error: Property 'value' does not exist on type 'HTMLElement'.ts(2339)
  // To properly type cast or inform TS about the type of the element, we need to write the following:
  (userInputElement4 as HTMLInputElement).value = 'Hi there!';
  
  // userInputElement4 as HTMLInputElement.value = 'Hi there!'; // this won't work since invalid syntax
}
