// NULLISH COALESCING

/**
 * If we've a scenario where we fetch some data from the 
 * backend and we also don't know whether the data we got back
 * is 'null' or 'undefined' data. And if we want to store it
 * in some other variable, then we generally make sure that if
 * the data is 'null' or 'undefined', we store a fallback 
 * value, something of the following sort.
 */

// assume that we got the following data from the backend
const userInput_ = null;

// now if we're trying to store this data in a variable, we might use the pipe (||) operator to do a Short-Circuit OR check
// and store only the truthy value as follows:
const storeData_ = userInput_ || 'DEFAULT';

console.log(storeData_); // DEFAULT

// For now, this works, but what if we receive some data like an empty string? in that case, we see the following:
const userInput__ = ''; // considered as a falsy value

// using short-circuit ORing, we'll store it in a variable
const storeData__ = userInput__ || 'DEFAULT';
console.log(storeData__); // DEFAULT

// we see that 'storeData__' is storing 'DEFAULT' string, whereas we had an empty string inside 'userInput__' and we wanted to store that as it is.
// in such cases, short-circuit ORing might not work, we might have to use nullish coalescing operator (??) in order to only rule out 'null' and 'undefined' values.
// all other values will not be considered as falsy as we see the usage below
const userInput = '';
const storeData = userInput ?? 'DEFAULT';
console.log(storeData); // ''
