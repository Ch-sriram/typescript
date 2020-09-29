# What is a Type System?

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
    1. **Primitive Types**: These are the basic types in TS, which are `number`, `boolean`, `void`, `undefined`, `string`, `symbol` and `null`.
    2. **Object Types**: These are types that the user can create, or some of the object types are built into the language itself, and these object types are (not limited to) `function`s, `array`s, `class`es and `object`s.
  - Why do we care about types at all? <br> We care about types primarily because of the following 2 reasons:
    1. **Types are used by the Typescript Compiler to analyze our code for errors**. Eg: If a value that we access has a type already defined in TS, and if we try to access some property/method that doesn't exist for that type, then TS will throw an error saying "Property/Method doesn't exist on type &lt;type of the `value`>".
    2. **Types allow other engineers to understand what values are flowing around our codebase**. Eg: When working in a large codebase, sometimes the programmers might use very poorly written argument names such as `a`, `t`, `d`, etc, and to know the type associated to these kind of argument names is really hard. And so, if we know the types related to these kind of argument names, it would make the life of other engineers easier to go through the codebase and understand what the code does.

## Where do we use these Types?

We kind of use these types everywhere. It always better to have a system which is type-safe. If we find the errors during the development stage itself and fix them then and there, the testing of the applications becomes much easier and so, there will be less number of bugs/errors popping up when the app is being used in production.

## What is Type Annotation & Type Inference?

Type Annotation & Type Inference are actually 2 different features inside of TS. But these 2 different features work in parallel and apply slightly differently to Variables, Functions & Objects.

- **Type Annotations**: Code we add to tell TS what type of value a variable will refer to. Basically, we (the developers & programmers) tell Typescript what the type of a certain variable/function/object is.
- **Type Inference**: TS tries to figure out what type of value a variable refers to. Here, Typescript guesses the type of the variable/function/object for which, the types have already been annotated.

### Type Inference In-Depth

Whenever we make a variable/const, we can do so in 2 ways:

1. **Declare and initialize the variable in a single line**. <br> Example: <pre>`const color = "red";` // here, the type of `color` will be inferred by TS to be a `'string'`</pre>
2. **Declare the variable, and initialize it later**. <br> Example: <pre>`let color;`<br>`color = "red";` // here, the type of `color` will be inferred by TS to be `any` type</pre>

**Therefore, whenever we declare and initialize on the same line, TS will figure out the type for us.** **But whenever we declare in one line, and initialize in another line, TS will infer the type of the variable to be `any`.**

#### When do we rely on Type Inference compared to Type Annotation?

In general, we're going to rely on Type Inference, always! *i.e.*, whenever we can, we'll rely on Type Inference (viz. declaring and initializing the variable without annotating the type).

But there are scenarios where we rely on Type Annotation, and these scenarios are:

1. Whenever we declare a variable on one line then initialize it later. <br> Example:
   - Instead of this: <pre>`let color;` // no annotation given => type of `color` is `any`<br>`color = "red";`</pre> 
   - We will do this: <pre>`let color: string;` // type is annotated => type of `color` is `'string'`<br>`color = "red";`</pre>
2. When a function returns the **`any`** type and we need to clarify the value. <br>Example: A good example for this problem is the usage of the **`JSON.parse()`** method.
   - Instead of this: <pre>`const json = '{"x": 10, "y": 20}';` // `json` is exactly of type `{"x": 10, "y": 20}`<br>`const coordinates = JSON.parse(json);` //`coordinates` is of type **`any`**<br>`console.log(coordinates);` // { x: 10, y: 20 }</pre>
   - We will do this:<pre>`const json = '{"x": 10, "y": 20}';` // `json` is exactly of type `{"x": 10, "y": 20}`<br>`const coordinates: { x: number; y: number; } = JSON.parse(json);` // `coordinates` is of type `'{ x: number; y: number }'`, not of type `'any'`<br>`console.log(coordinates);` // { x: 10, y: 20 }</pre>
3. When we have a variable to have a type that can't be inferred. <br>Example: We can use the pipe (`|`) operator to showcase this.
   - Instead of this: <pre>`let numbers = [-10, 01, 12];`<br>`let numberAboveZero = false;` // type of `numberAboveZero` inferred by TS is `'boolean'`<br><br>`for (let i = 0; i < numbers.length; ++i) {`<br>  `if (numbers[i] > 0) {`<br>    `numberAboveZero = numbers[i];` // error: Type 'number' is not assignable to type 'boolean' ts(2322).<br>  `}`<br>`}`</pre>
   - We want this, where we can use more than one type for a variable: <pre>`let numbers = [-10, 01, 12];`<br>`let numberAboveZero: boolean | number;` // type of `numberAboveZero` inferred by TS is either `'boolean'` or `'number'`<br><br>`for (let i = 0; i < numbers.length; ++i) {`<br>  `if (numbers[i] > 0) {`<br>    `numberAboveZero = numbers[i];` // no error.<br>  `}`<br>`}`</pre>

### Function Specific Type Annotation/Inference

- **Type Annotations for Functions**: Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return.
- **Type Inference for Functions**: Typescript tries to figure out what type of value a function will return. Therefore, the caveat is that TS will only infer the value that can be returned from a function by reading the function body, but TS will not figure out what type of value the arguments passed into the function are.

The difference here is that we're no longer adding type annotations for the variable declaration, instead we're annotating the function itself.
