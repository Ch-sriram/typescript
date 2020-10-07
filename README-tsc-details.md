# Typescript Compiler Details (and its Configuration)

The following are some details about the Typescript Compiler (`tsc`) which are extremely important to understand before moving ahead on learning about classes and interfaces.

## Compiling Typescript files

- Run Typescript files & generate the corresponding Javascript file using the command: **<code>tsc <em>file_name</em></code>**.
- Alternatively, we can generate the JS file using `tsc` command in watch mode to not compile the TS file into JS file manually &mdash; every time we make a change to the TS file, by using the following command: **<code>tsc <em>file_name</em> -w</code>**. <br> *NOTE: Instead of* `-w`*, we can also use* `--watch` *as an option to `tsc`*.

## Compiling the Entire Project / Multiple Files

- To compile all the TS files inside particular project at once, we have to configure a file known as **`tsconfig.json`** which can be generated using the command: **`tsc --init`**. To look into how a **`tsconfig.json`** file looks like, click **[here](https://github.com/Ch-sriram/typescript/blob/c9fe2ff7043c9182723a972de6564feaa1f918d0/fetchjson/tsconfig.json)**.
- Now, inside the directory, we can run the command: **`tsc`** (or **`tsc -w`**) to make sure that we compile all the TS files inside the project, to the corresponding JS files.

## Including & Excluding Files

- **`tsconfig.json`** file is a crucial file that informs the `tsc` about compilation options (which is literally known as **`compilerOptions`** in the `tsconfig.json` file where we can configure how the compiler behaves).
- After the `"compilerOptions"` JSON definition, we can define some more settings to inform the `tsc` about what we want. These settings don't affect the compiler's behaviour, but they might affect which files to compile and which ones not to compile.
- One of the additional setting we can add after the `"compilerOptions"` setting inside the `tsconfig.json` file is the **`"exclude"`** option &mdash; which takes in an array of files that are to be excluded by the `tsc`. Please see how to use `"exclude"` option **[here](https://github.com/Ch-sriram/typescript/blob/709d22b1ff6bf27eb7e301b8e2d9eb5ae8b5b6cf/fetchjson/tsconfig.json#L69)**.
- Another setting we can have inside `tsconfig.json` file is the **`"include"`** option &mdash; which is also an array that takes in the files/directories that are to be included by the `tsc`. By default, if we don't specify the `"include"` setting, every file/directory in the PWD is included for compilation by `tsc`. But if `"include"` is defined in `tsconfig.json` file, then only the files that are mentioned inside the `"include"` setting are compiled by the `tsc`. We can look into the usage of the `"include"` setting **[here](https://github.com/Ch-sriram/typescript/blob/709d22b1ff6bf27eb7e301b8e2d9eb5ae8b5b6cf/fetchjson/tsconfig.json#L75)**.
- Another setting we can have inside the `tsconfig.json` file is **`"files"`** option &mdash; which works similar to the `"include"` setting. The vital difference is that `"files"` can only have individual TS files that are to be considered by the tsc, whereas, using the `"include"` setting we can compile TS files in a particular directory. We can make use of `"files"` setting in `tsconfig.json` file when we work on a small-scale project, or when we know that we need to only compile certain files using `tsc`.

## Setting a Compilation Target

- In **`"compilerOptions"`** we have setting/rules related to how the typescript file is going to be compiled. Inside `"compilerOptions"`, we have a `"target"` rule that specifies to which version of ECMAScript standard, is/are the TS file(s) supposed to be compiled to (as `tsc` compiles the TS file and generates a JS file). By default, if `"target"` is not defined in the `compilerOptions` &mdash; the value will be "es3".

## Understanding Typescript Core `"lib"`s

**`"lib"`** is an option in the `"compilerOptions"` that allows the developer to specify which default objects and features TS knows. For example: The Document Object Model (DOM) &mdash; If we have the following files ***index.html*** and ***app.ts*** seen below:

***index.html***

```html
<!DOCTYPE html>
<html>
<head>
  <title>Understanding Typescript</title>
  <script src="app.js" defer></script>
</head>
<body>
  <button>Click Me</button>
</body>
</html>
```

***app.ts***

```ts
const button = document.querySelector('button')!; // ! before semi-colon is used to tell TS that `button` won't be null, and we'll definitely get a value
button.addEventListener('click', () => {
  console.log("Clicked!);
});
```

When we compile the ***app.ts*** file using `tsc`, it compiles without any errors. But shouldn't `tsc` stop the compilation mid-way and raise the error on how we can use the APIs from DOM? How does `tsc` know that we have the DOM APIs included and some other APIs included by default?

The reason why `tsc` recognizes the DOM APIs is because the **`"lib"`** by default, when not specified, is assumed to have the following libraries:

```js
{
  "compilerOptions": {
    ...
    "lib": [
      "dom", // tsc can now understand all DOM APIs
      "es6", // tsc can now understand all ES6 APIs
      "dom.iterable",
      "scripthost"
    ],
    ...
  }
}
```

**NOTE**: If we don't mention the **`"lib"`** option, by default it will take the aforementioned options.

## Working with Source Maps

- In the `"compilerOptions"` option, we can add an option known as **`"sourceMap"`** which is a boolean value (true/false). If we set it to true, `tsc` generates a file with the ***.map*** extension, which helps the developers to debug/view the code in its original form via browser/debugger (in Chrome, we have the **Sources** tab in the developer tools. If we don't have `sourceMap` set to true, we won't be able to see the typescript code for the component on the browser, we would only be able to browse the javascript code). The source map (the *.map* file) acts as a bridge to connect the JS files to the input files (which are the typescript files).

## `"rootDir"` and `"outDir"`

In a typical TS project, we have the following file structure.

```any
--dist
--src
    |-app.ts
 -index.html
 -package.json
 -tsconfig.json
```

In the directory structure above, whenever we run `tsc` command, the typescript compiler generates the JS files in the same directory wherever the TS files are.

To get rid of this behaviour, we can use the option **`"outDir"`** option in the `"compilerOptions"` option, and set it to **"./dist"**, so that now, the `tsc` compiled JS files will be generated inside the `dist` directory, and so, we'll see the following directory structure:

```any
--dist
    |-app.js
--src
    |-app.ts
 -index.html
 -package.json
 -tsconfig.json
```

**NOTE**: The generated JS files are always generated in the `dist` directory depending on the directory structure of wherever the TS files are located at.

To tell `tsc` about which directory to look into to get the TS files, we use the **`"rootDir"`** option inside the `"compilerOptions"` option, which we generally set to **"./src"**. Now the `tsc` will only compile the TS files available inside the `"rootDir"` directory. Note that the directory structure maintained inside the path mentioned for the `"rootDir"` (in this case `src`) will be maintained for compiling the TS files into JS files by `tsc`.

## Emitting Options

- If we don't want to generate JS files after compiling the TS files using the `tsc` command, we would set **`"noEmit"`** option inside the `"compilerOptions"` to **true**.
- If we specifically don't want to emit/generate the JS file(s) due to compilation error(s) in the TS file(s), we set the **`"noEmitOnError"`** to **true**. Because of this, if there are any compilation errors, `tsc` won't generate/emit the JS files, which is a recommended option.

## `strict` Option

- If we set the **`"strict"`** option in `"compilerOptions"` to **true**, we automatically set the following options as **true**:
  - **`noImplicitAny`**
  - **`strictNullChecks`**
  - **`strictFunctionTypes`**
  - **`strictBindCallApply`**
  - **`strictPropertyInitialization`**
  - **`noImplicitThis`**
  - **`alwaysStrict`**

We can always set `"strict"` option to false, but then we would be losing the advantages of Typescript. A better way to use the `"strict"` option depends on the requirements of the project &mdash; how much type strictness is needed? if not, then we can only set some of the options related to strictness to true.
