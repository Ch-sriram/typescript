"use strict";
/** GOAL */
// Make a network request to fetch some JSON and print the result
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"]
    .get(url)
    .then(function (response) { return console.log(response.data); });
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
 */
