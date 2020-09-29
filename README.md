# Typescript ⌨📜 &mdash; Proof of Concept

**TS = JS + Type Checking**.
This repository is created for my own reference/revision for the language Typescript. The repository contains code and concepts related to typescript and the various design patterns it uses. Please feel free to go through this repository and learn typescript.

## Resources

1. **[Typescript: The Complete Developer's Guide [2020] by Stephen Grider](https://www.udemy.com/course/typescript-the-complete-developers-guide/)**
2. **[Understanding TypeScript - 2020 Edition by Maximilian Schwarzuller](https://www.udemy.com/course/understanding-typescript/)**
3. **[Typescript Language Official Docs](https://www.typescriptlang.org/docs/)**

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

1. **[What are Types? More on Types. Where do we use Types?](./ts-features/README.md)** &#8592; **READ THIS BEFORE MOVING AHEAD ⭐⭐⭐**
2. Examples of Types: [Commit Details](https://github.com/Ch-sriram/typescript/commit/fd258d015fb3efdef93370da4f113b5bcff93630)

### III. Type Annotations In Action

1. **[What is Type Annotation & Type Inference?](https://github.com/Ch-sriram/typescript/tree/dev/ts-features#what-is-type-annotation--type-inference)**
2. Type Annotations with Variables: [Commit Details](https://github.com/Ch-sriram/typescript/commit/eecd06b4cf20d4164f230a3c3fbe516b7316c37a)
3. Basic Type Annotations with Arrays, Classes & Object Literals: [Commit Details](https://github.com/Ch-sriram/typescript/commit/bdb6c7ff6a2b05bd933f52ff3611654a5f234c45)
4. Basic Type Annotation with Functions: [Commit Details](https://github.com/Ch-sriram/typescript/commit/6313b30afe7e52e05c4bbb358e08165a231e4046)
5. **[Understanding Type Inference In-Depth](https://github.com/Ch-sriram/typescript/tree/dev/ts-features#type-inference-in-depth)**: **[Commit Detail #1](https://github.com/Ch-sriram/typescript/commit/cdea5db951241663887dc52ce7e4e0f0dd4f4541)** & **[Commit Detail #2](https://github.com/Ch-sriram/typescript/commit/ff1c206a3de5b2da587513386b4df3662d8d937a)** &#8592; **VERY IMPORTANT ⭐⭐⭐**

### IV. Type Annotations with Functions & Objects

1. **[More on Annotations Around Functions](./ts-features/README.md#function-specific-type-annotationinference)**: [Commit Details](https://github.com/Ch-sriram/typescript/commit/c257b0e5aa79e84be9e550d1c7c92bfd0dba3ece)
2. **[Inference Around Functions](./ts-features/README.md#function-specific-type-annotationinference)**: [Commit Details](https://github.com/Ch-sriram/typescript/commit/cca31b79928b54dbae5a2139298ed029fa5512d9)
3. Annotations for Anonymous Functions: [Commit Details](https://github.com/Ch-sriram/typescript/commit/411ce88ef00c5d1c5580903cb7aaad388dca8ecc)
4. Functions returning `void` and `never` typed values: [Commit Details](https://github.com/Ch-sriram/typescript/commit/bb05701b118c11ad9a152660badaef947b3aca73)
5. Destructuring Objects with Type Annotations: [Commit Details]()
