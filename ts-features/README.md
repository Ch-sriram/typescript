# What as a Type System?

A system where we make sure that every `value` in the code, has a **`type`** associated to it.

## What is a Type?

- **`Type`** is an easy way to refer to the different **`properties`** & **`functions/methods`**, that a **`value`** has.
- **`value`**: In JS & TS, a `value` is any data that we assign to a variable, and so, to a variable, we can assign the following kinds of `value`s: `string`s, `number`s, `boolean`s, `null`s, `undefined`, `object`s, `function`s, `class`es, `array`s, and so on... All of these different values, have types, i.e., An `object` has a type, a `function` has a type, an `array` has a type, and so on...
- So when we refer to the **`type`** of a `value`, we're trying to also refer to the different kind of `properties` and `functions` that that particular `value` with that particular `type` has. <br> Example: `"red"` is a `string` type `value`. By which, we can also infer that `"red"` is a `value` that has all the `properties` and `methods` that we assume that a `string` type has.

## More on Types

- Basic Examples of Types:
  | Type | Values That Have This Type |
  |------|----------------------------|
  |string|`'hi there'`, `""`, `'Today is Monday'`|
  |number|`.000025`, `-20`, `40000000`|
  |boolean|`true`, `false`|
  |Date|`new Date()`|
  |Todo|`{ id: 1, title: "Something", completed: true }`|
  
  As we can see from the table above, **every `value` in typescript, has a type**, i.e., even when we make a `Date()` object, that in itself has a type of **Date**. And for the the object with the `value` as the following `{ id: 1, title: "Something", completed: true }` also can have a type called **Todo**, if that's the `interface` for the object that we made in the codebase (viz. `interface Todo { id: number; title: string; completed: boolean; }`)
- How do these types relate to each other?
  - In the world of TS, we've two different categories of types:
    1. Primitive Types: These are the basic types in TS, which are `number`, `boolean`, `void`, `undefined`, `string`, `symbol` and `null`.
    2. Object Types: These are types that the user can create, or some of the object types are built into the language itself, and these object types are (not limited to) `function`s, `array`s, `class`es and `object`s.
  - Why do we care about types at all? <br> For that, we have 2 reasons:
    1. Types are used by the Typescript Compiler to analyze our code for errors. Eg: If a value that we access has a type already defined in TS, and if we try to access some property/method that doesn't exist for that type, then TS will throw an error saying "Property/Method doesn't exist on type &lt;type of the `value`>".
    2. Types allow other engineers to understand what values are flowing around our codebase. Eg: When working in a large codebase, sometimes the programmers might use very poorly written argument names such as `a`, `t`, `d`, etc, and to know the type associated to these kind of argument names is really hard. And so, if we know the types related to these kind of argument names, it would make the life of other engineers easier to go through the codebase and understand what the code does.

## Where do we use these Types?

We kind of use these types everywhere. It always better to have a system which is type-safe. If we find the errors during the development stage itself and fix them then and there, the testing of the applications becomes much easier and so, there will be less number of bugs/errors popping up when the app is being used in production.
