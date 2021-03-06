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

## Useful Tools/Commands

- **[Typescript Playground - Online Editor To Play Around With Typescript](https://www.typescriptlang.org/play)**

## Typescript Compiler Details (and its Configuration)

- Help from Official Docs
  - **[What is `tsconfig.json`?](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)**
  - **[`tsc`CLI options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)**
  - **[TSConfig Reference Manual](https://www.typescriptlang.org/tsconfig)**

- Additional Details on Important Options in TSConfig
  1. **[Compiling Typescript Files](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#compiling-typescript-files)**
  2. **[Compiling the Entire Project / Multiple Files](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#compiling-the-entire-project--multiple-files)**
  3. **[Including & Excluding Files](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#including--excluding-files)**
  4. **[Setting a Compilation Target](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#setting-a-compilation-target)**
  5. **[Understanding Typescript Core Libs](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#understanding-typescript-core-libs)**
  6. **[Working with Source Maps](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#working-with-source-maps)**
  7. **[`rootDir` and `outDir`](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#rootdir-and-outdir)**
  8. **[Emitting Options](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#emitting-options)**
  9. **[`strict` Option](https://github.com/Ch-sriram/typescript/blob/dev/README-tsc-details.md#strict-option)**

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
5. Destructuring Objects with Type Annotations: [Commit Details](https://github.com/Ch-sriram/typescript/commit/9c0f7e4c0a04241ad9dda8969ec077e9553aa9f7)
6. Complex Example of Destructuring Objects with Type Annotations: [Commit Details](https://github.com/Ch-sriram/typescript/commit/374229aab6f081251d60ba82565a545c21bb17bd)

### V. Mastering Typed Arrays

1. Arrays in Typescript: [Commit Details](https://github.com/Ch-sriram/typescript/commit/145dfa50818785654f170d5da50c15223307cd7c)
2. Why Typed Arrays?: [Commit Details](https://github.com/Ch-sriram/typescript/commit/8045606cab5cadac856461b1fd121dc2da1d65f4)
3. Multiple Types in Arrays: [Commit Details](https://github.com/Ch-sriram/typescript/commit/842c938b3ae5c8a036f731d5ee08cc0128f1e102)

### VI. Tuples in Typescript

1. Tuples in Action && Intro to Type Aliasing: [Commit Details](https://github.com/Ch-sriram/typescript/commit/675145849b1c9278a6d4f797795bf42b145eb911)
2. Why Tuples & Why Not Tuples? [Commit Details](https://github.com/Ch-sriram/typescript/commit/bf687d40ee674359d85a9f81703be68e7607e782)

### VII. Miscellaneous Types (Lesser Usage)

1. Working with `enum`s: [Commit Details](https://github.com/Ch-sriram/typescript/commit/72709088573e77a3ea048747a0d1356fb90c0a9e)
   - **`Enums` are enumerated global constant identifiers that automatically start with 0**.
2. Literal Types & Union Types: [Commit Details](https://github.com/Ch-sriram/typescript/commit/ed33212cbb8674896e9a3fd283f1d1b90d063735)
3. The `unknown` type: [Commit Details](https://github.com/Ch-sriram/typescript/commit/1d58c3ad0309381eab128f2827e89de4153f074b)

### VIII. Classes & Interfaces ⭐⭐⭐

1. What are Classes? &mdash; **A `class` is a blueprint to create an object with some fields (values) and methods (functions) to represent an entity/thing/real-world-object**
2. Classes in Action: [Commit Details](https://github.com/Ch-sriram/typescript/commit/0f8f36c2a1d2577bf22432ecbe9efee96124e89d)
3. Class with `constructor()`: [Commit Details](https://github.com/Ch-sriram/typescript/commit/55c13f596b469df25ab4dab9cd955f012bbe6aee)
4. `constructor()` function and the `this` keyword: [Commit #1](https://github.com/Ch-sriram/typescript/commit/7a1a91024a9a7ebcd608d9670c0f34cb7bd59138) & [Commit #2](https://github.com/Ch-sriram/typescript/commit/470ce9b76d1aa4e7e270123101612bb91fe07978)
5. `private` & `public` Access Modifiers: [Commit #1](https://github.com/Ch-sriram/typescript/commit/0fedd06547f98198a547947c090c5c6d2b700fe8) & [Commit #2](https://github.com/Ch-sriram/typescript/commit/68065e072224d4d49712d9d706146ba998f8b5a5)
6. Shorthand Initialization of Properties in a `class`: [Commit #1](https://github.com/Ch-sriram/typescript/commit/e02a60b0dad04249857820c427eb34bcb4411545) & [Commit #2](https://github.com/Ch-sriram/typescript/commit/e49a66d3620504fe160b1880fafa6acf4703f27f)
7. `readonly` Properties: [Commit Details](https://github.com/Ch-sriram/typescript/commit/a676959ae4de30af04ccea5345af145de05c76b5)
8. Inheritance: [Commit Details](https://github.com/Ch-sriram/typescript/commit/406aa335f69d220f03a89d79eee3c391b82af4a5)
9. Overriding Properties & The `protected` Access Modifier: [Commit Details](https://github.com/Ch-sriram/typescript/commit/f8aae4c10e9131cdc37a6f1a1e08550d87e69985)
10. Getters & Setters using `get` & `set`: [Commit Details](https://github.com/Ch-sriram/typescript/commit/a1e576d3e3a8c3ccfb69c1080d91c9dbdcdd2c21)
11. `static` Methods & Properties: [Commit Details](https://github.com/Ch-sriram/typescript/commit/5fa0ba6196321a6feafc3210045fa1f7914c7888)
12. `abstract` Classes: [Commit Details](https://github.com/Ch-sriram/typescript/commit/b1e1be48e66051dce2c3f0f19254cf42daad5494)
13. Singleton Pattern & `private` constructors: [Commit Details](https://github.com/Ch-sriram/typescript/commit/20c289b1b34711ed1eb7cc8dbd545fcf4cae4a4c)
14. What are Interfaces?
    - **`interface` creates a new type, describing the property names and value types of an object.**
    - `interface`s is a pure TS feature and so, it is not available in JS. If we look into a JS file which is converted from a TS file (which had interface related code), we will see that none of the `interface`s are compiled to its respective JS version because `interface`s are native to TS, and not JS.
15. Long Type Annotations: [Commit Details](https://github.com/Ch-sriram/typescript/commit/bafcb289621cda280e04be295ca7cfebf3e1c636)
16. Fixing Long Annotations with `interface`s: [Commit Details](https://github.com/Ch-sriram/typescript/commit/5f2439ce203aa06dfdcb9dc8bf3359e9f0dded29)
17. Syntax Around Interfaces: [Commit Details](https://github.com/Ch-sriram/typescript/commit/f64740f9d224b4e58348d2f1ac2514bf5c33f9fa)
18. Using `interface`s with `class`es: [Commit Details](https://github.com/Ch-sriram/typescript/commit/e0a0e2ca1c4aa5f7ef3a693c4079db8477b87d8f)
19. `readonly` Interface Properties: [Commit Details](https://github.com/Ch-sriram/typescript/commit/a40a07b38ab7cefd76ae06e421379e58477115fb)
20. `extend`ing Interfaces: [Commit Details](https://github.com/Ch-sriram/typescript/commit/cb78355d7490f8170d0c17e805fe97f7cabcfdbd)
21. Functions in Interfaces: [Commit Details](https://github.com/Ch-sriram/typescript/commit/5c3f1b97fb69c6002f157a2266103948710325a0)
22. Code Reuse with Interfaces: [Commit Details](https://github.com/Ch-sriram/typescript/commit/1dbc736180b4532c31f9ef3ed317831db757fa31)
23. `interface`s as Function Types: [Commit Details](https://github.com/Ch-sriram/typescript/commit/faf4b342fb7f580b70f7694b10bad8a93ef188bf)
24. Optional Parameters & Properties for an `interface`: [Commit Details](https://github.com/Ch-sriram/typescript/commit/8611bcaf0b4375d9c5e4ed7f369493e16c38486f)

### IX. Advanced Typing Concepts ⭐⭐

1. Intersection Types: [Commit Details](https://github.com/Ch-sriram/typescript/commit/2dd696d740d3a8690f55bc63cafbfb36f06d186f)
2. More on Type Guards: [Commit Details](https://github.com/Ch-sriram/typescript/commit/1b07935ab9088d017fc0948f6767115bf91d938f)
3. Discriminated Unions: [Commit Details](https://github.com/Ch-sriram/typescript/commit/d1ca94764833c11d57e4c0ffbdf913cf1904aac2)
4. Type Casting - Not much of casting, but informing: [Commit Details](https://github.com/Ch-sriram/typescript/commit/cc67d875ab1b35d98d54cdec40aef2195d6b096f)
5. **Index Properties** ⭐⭐: [Commit Details](https://github.com/Ch-sriram/typescript/commit/c3754c093240686322eddeddc51bbc6239c6a765)
6. Function Overloads: [Commit Details](https://github.com/Ch-sriram/typescript/commit/1884c95b4e04f6c48ac01abdfb1f9d4bc6f41dbf)
7. Optional Chaining: [Commit Details](https://github.com/Ch-sriram/typescript/commit/643b932ab9948566f533f0cca81ddd46893b40ac)
8. Nullish Coalescing: [Commit Details](https://github.com/Ch-sriram/typescript/commit/ff79d26e5a242a6715e1b83bf16a416801672556)

### X. Generics ⭐⭐⭐

1. Built-in Generics & What are Generics? [Commit Details](https://github.com/Ch-sriram/typescript/commit/7e614e22e9a460dd65188ca571484fec33961056)
2. Creating a Generic Function: [Commit Details](https://github.com/Ch-sriram/typescript/commit/6f4aa19e673cdb3b38daa078f47f61d4d1ab954d)
3. Working with Constraints: [Commit Details](https://github.com/Ch-sriram/typescript/commit/cc196b5224a7e5b2e32c6cdca6d742be585eb700)
4. Generic Function w. Custom Interface: [Commit Details](https://github.com/Ch-sriram/typescript/commit/b25a6dc91a989200c9782f3387db45bbc1168110)
5. The `keyof` Constraint: [Commit Details](https://github.com/Ch-sriram/typescript/commit/68b203888ac8392558de9ac1e04649514557af74)
6. Generic Classes: [Commit Details](https://github.com/Ch-sriram/typescript/commit/75e752c1cfcf745bf9c94e72223c6555b9819cbd)
7. **[Generic Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)** like `Partial<>` & `Readonly<>`: [Commit Details](https://github.com/Ch-sriram/typescript/commit/9877db1924d9e55f52e81fd465befaa7e5f32229)
8. Generic Types vs Union Types: [Commit Details](https://github.com/Ch-sriram/typescript/commit/6a4bfdc2e52ac01c8a6d15313256e0c222beb866)

### XI. Decorators ⭐⭐

Open `tsconfig.json` and set **`"target": "es6"`** & **`"experimentalDecorators": true`** before moving ahead with the content below.

Note: For more info on `tsconfig.json` related to this section, check this file [here](./ts-features/ts-decorators/tsconfig.json)

1. A First Class Decorator: [Commit Details](https://github.com/Ch-sriram/typescript/commit/8bc01aaae630f4caa32c0c103ed6aa33e94ceebd)
2. Working with Decorator Factories: [Commit Details](https://github.com/Ch-sriram/typescript/commit/f8dea6eac15c715fcee46e9eae210058eddae8b7)
3. Using Decorator(s) to Manipulate the DOM: [Commit Details](https://github.com/Ch-sriram/typescript/commit/a05b656f5a58edaa85ad447e32f75ee4817954c5)
4. Adding Multiple Decorators to a single Class: [Commit Details](https://github.com/Ch-sriram/typescript/commit/8bbea2921dddc438a320cf822f401e10f9bec243)
5. Property Decorators: [Commit Details](https://github.com/Ch-sriram/typescript/commit/f7858835d37c3cb4242501a1a8b480bbe8eaab91)
6. Accessor, Method & Parameter Decorators: [Commit Details](https://github.com/Ch-sriram/typescript/commit/030d3092d585fea27cc42732a9d2e3735b68aec8)
7. When Do Decorators Execute? [Commit Details](https://github.com/Ch-sriram/typescript/commit/f81a5e63284d19ec58b594be4d0fb8c2ba22dae7)
8. Returning (& Modifying) a Class in Class Decorator: [Commit Details](https://github.com/Ch-sriram/typescript/commit/07a2578e1b28fc21f30f2a2a45b182a35bc2bdb9)
9. Decorator Return Types for Method & Accessor Decorators (Read about [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) before going ahead): [Commit Details](https://github.com/Ch-sriram/typescript/commit/49bc780e72aea2a916e8324d046b9e5e44100753)
10. Returning Descriptor From A Method Decorator (Ex: Creating an `@Autobind` Decorator): [Commit Details](https://github.com/Ch-sriram/typescript/commit/c8c8fb90120314fb6b863c922684ad783498b2f7)
11. Validation with Decorators
    1. Why to Validate Using Decorators? [Commit Details](https://github.com/Ch-sriram/typescript/commit/9ed8251918a4bf2126695c204c4fe6acdd673262)
    2. Implementation of Validation Using Decorators: [Commit #1](https://github.com/Ch-sriram/typescript/commit/c0e37ff70bc456287395edbb69d6e753e53b50a1), [Commit #2 [Shortening the code using DRY]](https://github.com/Ch-sriram/typescript/commit/9f89cc51ec63a35ecd44b0a642a879a4005729f3) & [Commit #3 [Bug Fixes]](https://github.com/Ch-sriram/typescript/commit/b0776ff8970afd50200a3ee64ff8a904a94628b9)
12. Libraries that use/rely heavily on Decorators are the following
    1. **[typestack/class-validator](https://github.com/typestack/class-validator)** &mdash; Decorator based property validation for classes.
    2. **[Angular](https://angular.io/guide/component-overview)** &mdash; Frontend JS/TS Framework that relies heavily on decorator implementations.
    3. **[NestJS](https://docs.nestjs.com/controllers#routing)** &mdash; A progressive Node.js framework for building efficient, reliable and scalable server-side applications, which also uses a lot of decorator based meta programming constructs for making a `GET`, `POST`, etc routes.
