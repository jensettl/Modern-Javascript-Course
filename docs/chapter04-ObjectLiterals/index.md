# Chapter03 - Object Literals

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter05-DocumentObjectModel)

Object Literals are used to create objects. Objects are used to store data in key-value pairs. Objects can contain functions.

## Creating a Object Literal

Object Literals are created with curly braces `{}`. Key-value pairs are separated by a colon `:`. Key-value pairs are separated by a comma `,`.

```javascript
let user = {
	name: "John",
	age: 30,
};

typeof user; // object
```

## _Addition_: Accessing Object Properties

Object properties can be accessed with dot notation `.`. Object properties can be accessed with square bracket notation `[]`.

```javascript
console.log(user.name); // John
console.log(user["age"]); // 30
```

````

## Adding Methods to an Object

Methods are functions that are stored in an object.

```javascript
let user = {
    name: 'John',
    age: 30,
    login: function() {
        console.log('User is logged in');
    }
};
````

## `This` Keyword

The `this` keyword refers to the object that the method is defined in.

> `This` is not available in arrow functions.

```javascript
let user = {
	name: "John",
	age: 30,
	login: function () {
		console.log(this.name + " is logged in");
	},
};
```

## Array of Objects

Objects can be stored in an array.

```javascript
let users = [
	{
		name: "John",
		age: 30,
	},
	{
		name: "Sarah",
		age: 32,
	},
];
```

## Math Object

The Math object contains properties and methods for mathematical constants and functions.

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.round(3.7)); // 4
console.log(Math.floor(3.7)); // 3
console.log(Math.ceil(3.7)); // 4
```

## Primitive vs. Reference Types

Primitive types are stored in the stack. Reference types are stored in the heap.

> **Stack**: The stack is a small memory space. The stack is fast.

> **Heap**: The heap is a large memory space. The heap is slow.

```javascript
// Primitive Types
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 50 scoreTwo: 50

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 100 scoreTwo: 50
```

```javascript
// Reference Types
const userOne = { name: "John", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo); // {name: "John", age: 30} {name: "John", age: 30}

userOne.age = 40;

console.log(userOne, userTwo); // {name: "John", age: 40} {name: "John", age: 40}
```

## Digression: Date Object

The Date object is used to work with dates and times.

```javascript
const now = new Date();

console.log(now); // 2020-10-10T12:00:00.000Z
console.log(typeof now); // object

console.log(`getFullYear: ${now.getFullYear()}`); // getFullYear: 2020
console.log(`getMonth: ${now.getMonth()}`); // getMonth: 9
console.log(`getDate: ${now.getDate()}`); // getDate: 10
```

## _Addition_: JSON

JSON is a format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

> JSON is a string. JSON is not an object.

```javascript
const user = {
	name: "John",
	age: 30,
};
```
