# Chapter03 - Functions and Methods

[< Previous Chapter](/Modern-Javascript-Course/chapter03-FunctionsAndMethods) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter04-ObjectLiterals)

---

Functions and Methods are used to execute code. Functions are declared with the `function` keyword. Methods are functions that are part of an object.

## Function Declaration & Expression

Function Declarations are used to declare functions. Function Expressions are used to assign functions to variables.

> JavaScript **hoists** function declarations but not function expressions. This means that function declarations can be used before they are declared.

```javascript
// function declaration
function greet() {
	console.log("Hello World!");
}

// function expression
const speak = function () {
	console.log("Good Day!");
};

greet(); // Hello World!

speak(); // Good Day!
```

## Arguments & Parameters

Arguments are used to pass data to functions. Parameters are used to receive data in functions.

```javascript
const speak = function (name = "John", time = "morning") {
	console.log(`Good ${time} ${name}!`); // Good morning John!
};

speak("Peter", "afternoon"); // Good afternoon Peter!
```

## Returning Values

Functions can return values with the `return` keyword. The `return` keyword can be used to return a value and to exit a function.

```javascript
const calcArea = function (radius) {
	return 3.14 * radius ** 2;
};

const area = calcArea(5);

console.log(area); // 78.5
```

## Arrow Functions

Arrow Functions are a shorter way to write functions. Arrow Functions do not have their own `this` keyword.

```javascript
// regular function
const calcArea = function (radius) {
	return 3.14 * radius ** 2;
};

// arrow function
const calcArea = (radius) => {
	return 3.14 * radius ** 2;
};

// arrow function with implicit return
const calcArea = (radius) => 3.14 * radius ** 2;
```

## Functions vs Methods

Functions are declared with the `function` keyword. Methods are functions that are part of an object.

```javascript
// function
const greet = () => "Hello World!";

// method
const name = "Peter";
name.toUpperCase(); // PETER
```

## Foreach Method & Callbacks

The `foreach` method is used to loop through an array. A callback function is a function that is passed to another function as an argument.

> Callback functions are used to execute code after an asynchronous operation has completed.

```javascript
const names = ["Peter", "John", "Jane"];

names.forEach((name, index) => {
	console.log(index, name); // 0 Peter, 1 John, 2 Jane
});
```

## Callback Functions in Action

Callback functions are used to execute code after an asynchronous operation has completed.

> Asynchronous operations are operations that take some time to complete.

```javascript
const getTodos = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			callback(undefined, request.responseText); // (error, data)
		} else if (request.readyState === 4) {
			callback("could not fetch data", undefined); // (error, data)
		}
	});

	request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
	request.send();
};

getTodos((err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
```

## Excurse: Object Methods

Methods are functions that are part of an object. Methods can be declared with the `function` keyword or with the `arrow` keyword.

```javascript
const user = {
	name: "Peter",
	age: 30,
	email: ""
	location: "Berlin",
	blogs: ["Why Mac & Cheese rules", "10 things to make with Marmite"],
	login: function () {
		console.log("the user logged in");
	},
	logout() {
		console.log("the user logged out");
	},
	logBlogs() {
		console.log("this user has written the following blogs:");
		this.blogs.forEach((blog) => {
			console.log(blog);
		});
	},
};

user.login(); // the user logged in
user.logout(); // the user logged out
user.logBlogs(); // this user has written the following blogs: Why Mac & Cheese rules, 10 things to make with Marmite
```

## Excurse: Method Chaining

Method Chaining is a technique that allows multiple methods to be called on the same line.

```javascript
const name = "Peter";

name.toUpperCase().split(""); // ["P", "E", "T", "E", "R"]
```

---

[< Previous Chapter](/Modern-Javascript-Course/chapter03-FunctionsAndMethods) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter04-ObjectLiterals)
