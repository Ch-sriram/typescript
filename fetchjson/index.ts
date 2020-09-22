/** GOAL */
// Make a network request to fetch some JSON and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios
  .get(url)
  .then(response => console.log(response.data));

// COMPILING & RUNNING w. `tsc` & `node`
/**
 * Compile this file using `tsc` (typescript compiler) - 
 * Command: 
 *      tsc index.ts 
 *  which will generate `index.js` file in the same directory 
 * where `index.ts` file was located.
 * 
 * To run the generated file, we use `node` in cmd/terminal:
 * Command:
 *      node index.js
 *  Notice that we are compiling `index.js` file and not 
 * `index.ts` file, using `node`.
 * 
 * Output after running `node index.js`:
 * ------------------------------------
 * { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
 */

// COMPILING & RUNNING w. `ts-node` 
/**
 * Instead of using the steps above, we can compile and run the
 * application using the `ts-node` command:
 * Command:
 *      ts-node index.ts
 * Which will NOT generate an `index.js` file to the disk, but
 * will generate it in memory, and then run it respectively.
 * 
 * Output:
 * ------
 * { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
 */
