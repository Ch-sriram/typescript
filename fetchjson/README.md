# Some Details on `fetchjson` Directory

- API Used: **<https://jsonplaceholder.typicode.com>**
- Endpoints Used: **[/todos](https://jsonplaceholder.typicode.com/todos)**
- Dependencies Used: **`npm i --save axios`**

## Compiling & Running Typescript Code Using `tsc` & `node`

- Compile this `index.ts` using `tsc` (typescript compiler)
  - Command: **`tsc index.ts`** <br>
    which will generate `index.js` file in the same directory where `index.ts` file was located.
- To run the generated file (`index.js`), we use `node`
  - Command: **`node index.js`** <br>
    notice that we are compiling `index.js` file and not `index.ts` file, using `node`.

## Compiling & Running Typescript Code By Only Using `ts-node`

- Instead of using the steps above, we can compile and run the application (`index.ts`) using `ts-node`
  - Command: **`ts-node index.ts`** <br>
    which will NOT generate an `index.js` file to the disk, but will generate it in memory, and then run it respectively.
