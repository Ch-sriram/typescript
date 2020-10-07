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
