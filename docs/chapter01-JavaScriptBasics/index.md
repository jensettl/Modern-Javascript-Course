# Chapter01 - JavaScript Basics

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter02-ControlFlowBasics)

## Adding JavaScript to a Web Page

By adding a `<script></script>` Tag in the header of a HTML document, we can add JavaScript to a web page. The `<script></script>` Tag can be placed in the header or in the body of the HTML document. If it is placed in the header, the JavaScript code will be executed before the HTML document is rendered. If it is placed in the body, the JavaScript code will be executed after the HTML document is rendered.
Alternatively, we can add a JavaScript file to the HTML document by adding a `<script src="path/to/file.js"></script>` Tag to the header or body of the HTML document. The JavaScript file will be executed before or after the HTML document is rendered, depending on where the `<script src="path/to/file.js"></script>` Tag is placed.

```html
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>JavaScript</title>
	</head>
	<body>
		<h1>Functions</h1>
		<script src="sandbox.js"></script>
	</body>
</html>
```

## The Browser Console

With the Console you can check if your JavaScript code is working as expected. You can open the Console in the browser by pressing `F12` or `Ctrl + Shift + I`. In the Console you can type JavaScript code and execute it by pressing `Enter`. You can also see the output of your JavaScript code in the Console.

## Variables, Constants & Comments

JavaScript has reserved keywords that cannot be used as variable names. The reserved keywords can be found [here](https://www.w3schools.com/js/js_reserved.asp).

With the `let` keyword we can declare a variable. The variable can be changed later in the code. With `const` we can declare a constant. The constant cannot be changed later in the code.

```javascript
// mutable variable
let age = 30;
age = 31;

// immutable variable
const year = 2023;

console.log(age, year);
```

## Data Types

There are different data types in JavaScript. The most common data types are: `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol` and `Object`. The data type of a variable can be checked with the `typeof` operator.

## Strings

Strings are used to store text. Strings can be declared with single quotes or double quotes. If you want to use single quotes in a string, you have to use double quotes to declare the string. If you want to use double quotes in a string, you have to use single quotes to declare the string. If you want to use both single and double quotes in a string, you have to use backticks to declare the string.

JavaScript has Built-in Methods for Strings. The Built-in Methods can be found [here](https://www.w3schools.com/js/js_string_methods.asp).

```javascript
let firstName = "John";
let lastName = "Doe";

// concatenation
let fullName = firstName + " " + lastName;

// getting characters
console.log(fullName[0]); // J

// string length
console.log(fullName.length); // 8

// more string methods
console.log(fullName.toUpperCase()); // JOHN DOE
console.log(fullName.toLowerCase()); // john doe
console.log(fullName.indexOf("Doe")); // 5
console.log(fullName.lastIndexOf("Doe")); // 5
console.log(fullName.slice(0, 4)); // John
```

## Numbers

Numbers are used to store numbers. Numbers can be integers or decimals. Numbers can be declared with or without decimals. Numbers can be positive or negative. Numbers can be declared with the `Number` keyword or without the `Number` keyword.

JavaScript has Built-in Methods for Numbers. The Built-in Methods can be found [here](https://www.w3schools.com/js/js_number_methods.asp).

```javascript
let radius = 10;
const pi = 3.14;

// math operators +, -, *, /, **, %
console.log(10 / 2); // 5
let result = radius % 3; // 1

// order of operation - B I D M A S
let result = 5 * (10 - 3) ** 2; // 245

// increment and decrement operators (++, --)
let likes = 10;
likes++; // 11
likes--; // 9

// NaN - not a number
console.log(5 / "hello"); // NaN

// concatenation
let result = "the blog has " + likes + " likes"; // the blog has 9 likes
```

## Template Strings

Template Strings are used to create strings. Template Strings are declared with backticks. Template Strings can contain variables. Template Strings can contain expressions. Template Strings can contain HTML.

```javascript
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// concatenation way
let result =
	"The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result); // The blog called Best reads of 2019 by Mario has 30 likes

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
```

## Arrays

Arrays are used to store multiple values in a single variable. Arrays can contain different data types. Arrays can be declared with square brackets. Arrays can be declared with the `Array` keyword or without the `Array` keyword.

JavaScript has Built-in Methods for Arrays. The Built-in Methods can be found [here](https://www.w3schools.com/js/js_array_methods.asp).

```javascript
let characters = ["Mario", "Luigi", "Peach"];

// getting one value
console.log(characters[1]); // Luigi

// changing value
characters[1] = "Bowser";

// getting array length
console.log(characters.length); // 3

// array methods
let result = characters.join(", "); // Mario, Bowser, Peach
let result = characters.indexOf("Peach"); // 2
let result = characters.concat(["Toad", "Yoshi"]); // ["Mario", "Bowser", "Peach", "Toad", "Yoshi"]
let result = characters.push("Toad"); // ["Mario", "Bowser", "Peach", "Toad"]
let result = characters.pop(); // ["Mario", "Bowser", "Peach"]
```

## Null & Undefined

`null` is used to explicitly set a variable with no value. `undefined` is used to declare a variable without a value.

```javascript
let age = null;
console.log(age, age + 3, `the age is ${age}`); // null, NaN, the age is null
```

```javascript
let age;
console.log(age, age + 3, `the age is ${age}`); // undefined, NaN, the age is undefined
```

## Booleans & Comparisons

Booleans are used to store true or false values. Booleans can be declared with the `Boolean` keyword or without the `Boolean` keyword. Booleans can be used with comparison operators.

```javascript
console.log(true, false, "true", "false");

// methods can return booleans
let email = "";
let result = email.includes("@"); // false

// comparison operators
let age = 25;
console.log(age == 25); // true
console.log(age == 30); // false

console.log(age != 30); // true
console.log(age > 20); // true
console.log(age < 20); // false
```

## Loose vs Strict Comparison

Loose Comparison (`==`) compares two values after converting them to the same type. Strict Comparison (`===`) compares two values without converting them to the same type.

```javascript
let age = 25;

console.log(age == 25); // true
console.log(age == "25"); // true

console.log(age === 25); // true
console.log(age === "25"); // false
```

## Type Conversion

Type Conversion is used to convert a value to another type. Type Conversion can be done with the `String`, `Number` and `Boolean` keywords.

```javascript
let score = "100";

console.log(score + 1); // 1001

score = Number(score);

console.log(score + 1); // 101
console.log(typeof score); // number
```

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter02-ControlFlowBasics)
