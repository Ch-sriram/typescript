/**
 * Assume that `person` object has a 'role' property which is
 * a number, where each number is associated with an actual 
 * role, and so, something like the following:
 */

// 0 => ADMIN; 1 => READ ONLY USER; 2 => AUTHOR
const person = {
  name: 'Ram',
  age: 25,
  hobbies: ['Gaming', 'Cooking', 'Sports'],
  role: 1,
};

// We have to make the check as follows:
if (person.role === 1)
  console.log('is read only user');

// disadv: we have to remember the numbers for the `person.role` object. Imagine the codebase being of 1000 lines.

/**
 * In order to rectify that, we can make use of constants as
 * follows:
 */
const ADMIN = 0, READ_ONLY = 1, AUTHOR = 2;
const person2 = {
  name: 'Ram',
  age: 25,
  hobbies: ['Gaming', 'Cooking', 'Sports'],
  role: READ_ONLY, // (property) role: number
};

// adv of constants is that we can make use of them everywhere in our code
if (person2.role === READ_ONLY)
  console.log('is read only user');

// disadv is that now, `person.role` is inferred by TS as a 'number', and so, we can store any kind of a number. Also, we have to define the constants and manage them.

/**
 * Instead of using the 2 methods aforementioned, we can make 
 * use of constants. Which make our lives much easier, as now
 * we need not worry about the numbers we want to assign, or
 * we need not worry that TS will infer the particular object 
 * to be of some generic type, TS will now infer that 
 * particular object property to be of the enum type with that
 * exact type as shown below.
 */
enum Role { ADMIN, READ_ONLY, AUTHOR }; // Behind the scenes: ADMIN = 0, READ_ONLY = 1 & AUTHOR = 2, are assigned by default
const person3 = {
  name: "Ram",
  age: 25,
  hobbies: ["Gaming", "Cooking", "Sports"],
  role: Role.AUTHOR, // (property) role: Role
};

if (person3.role === Role.AUTHOR)
  console.log('is author');

// we can do the following with enums:
enum Roles { ADMIN = 100, READ_ONLY, AUTHOR }; // READ_ONLY and AUTHOR are now assigned 101 & 102 respectively.
enum Role_ { ADMIN = 500, READ_ONLY = 'READ_ONLY', AUTHOR = -12.5 }; // each identifier in the enum is different.
