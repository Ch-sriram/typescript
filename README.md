# Typescript ⌨📜 &mdash; Proof of Concept

**TS = JS + Type Checking**.
This repository is created for my own reference/revision for the language Typescript. The repository contains code and concepts related to typescript and the various design patterns it uses. Please feel free to go through this repository and learn typescript.

## Resources

1. **[Typescript: The Complete Developer's Guide [2020] by Stephen Grider](https://www.udemy.com/course/typescript-the-complete-developers-guide/)**
2. **[Typescript Language Official Docs](https://www.typescriptlang.org/docs/)**

## Required Dependencies

- **[Node Package Manager (npm)](https://nodejs.org/en/)** for Package Management. Check if `npm` was installed or not by opening the cmd/terminal and type in **`npm --version`**, you should see the version of `npm` you installed.
- After installing `npm`, we will install `typescript` and `ts-node` with the command **`npm i -g typescript ts-node`** in cmd/terminal. To check if the `typescript` was successfully installed, in the cmd/terminal, type in the command **`tsc --help`**, and you should see some output regarding typescript help. *NOTE: **`tsc`** stands for **`typescript compiler`***.
- **[Download Visual Studio Code](https://code.visualstudio.com)** as the editor as it has extensive typescript support.

## Useful Tools

- **[Typescript Playground - Online Editor To Play Around With Typescript](https://www.typescriptlang.org/play)**

## Contents

### I. Why Write Code In Typescript?

API Used: **<https://jsonplaceholder.typicode.com>**
Endpoints Used: **[/todos](https://jsonplaceholder.typicode.com/todos)**
Dependencies Used: **`npm i --save axios`**

1. Basic Setup: [Commit Details](https://github.com/Ch-sriram/typescript/commit/150b2e05bd9a58f0920408726e6261e7d5686c48)
2. Executing TS Code Using `tsc`, `node` & `ts-node`: [Commit Details](https://github.com/Ch-sriram/typescript/commit/4ea4ea72c8c8ccd352aa2061c103c90f0642e0c8)
3. Introducing a Bug: [Commit Details](https://github.com/Ch-sriram/typescript/commit/8c7b795ea615db5dcea8d80ab98465878b19a658)
4. Catching Errors with Typescript using `interface`: [Commit Details](https://github.com/Ch-sriram/typescript/commit/3e39fd5bcc47dda4d4c314b13315336efd4d98ea)
5. Introducing Another Bug using a Function: [Commit Details](https://github.com/Ch-sriram/typescript/commit/4fb1e704881f4b26739a374ec6ace5199619c3e6)
6. Catching Errors related to a Function: [Commit Details](https://github.com/Ch-sriram/typescript/commit/7db41c937bf3df14d7699665bdbe2bb638ae1b0b)

### II. The Type System

- What is a Type?
  - Easy way to refer to the different **`properties`** & **`functions`**, that a **`value`** has.
  - `value`: In JS & TS, a `value` is any data that we assign to a variable, and so, to a variable, we can assign the following `value`s: `string`s, `number`s, `boolean`s, `null`s, `undefined`, `object`s, `function`s, `class`es, `array`s, and so on... All of these different values, have types, i.e., An `object` has a type, a `function` has a type, an `array` has a type, and so on...
  - So when we refer to the **`type`** of a `value`, we're trying to also refer to the different kind of `properties` and `functions` that that particular `value` with that particular `type` has. <br> Example: `"red"` is a `string` type `value`. By which, we can also infer that `"red"` is a `value` that has all the `properties` and `methods` that we assume that a `string` has.
