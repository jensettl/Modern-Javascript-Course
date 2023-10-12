# Chapter14 - Object Oriented JavaScript

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter15-DatabasesFirebase/)

## What is OOP?

`Object` Oriented Programming is a programming paradigm based on the concept of objects.
Objects may contain data, in the form of fields, often known as `attributes`; and code, in the form of procedures, often known as `methods`.

> Primitive Types are being wrapped in Objects to provide additional functionality like methods.

## Object Literals

```javascript
const user = {
	name: "John",
	location: "Berlin",
	login: function () {
		console.log("User logged in");
	},
	logout: function () {
		console.log("User logged out");
	},
};
```

## Classes

A class is like a blueprint for creating objects. An object has properties and methods (functions) associated with it.

> Almost everything in JavaScript is an object. Primitive values like `1`, `true`, `"hello"` are not objects, though but handled as if they were.

## Class Constructors

Class Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object.

```javascript
class User = {
    // Constructor ECMA6
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

const user1 = new User("John", "Berlin");
```

## Class Methods & Method Chaining

```javascript
class User = {
    constructor() {...}

    login() {
        console.log("User logged in");
        return this; // return the object itself
    }
}

const user1 = new User("John", "Berlin");
user1.login().logout();
```

## Class Inheritance

```javascript
class User = {
    constructor() {...}

    login() {
        console.log("User logged in");
        return this; // return the object itself
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => u.name !== user.name);
    }
}
```

## Super()

The `super` keyword is used to access and call functions on an object's parent.

```javascript
class User = {
    constructor(name, location) {...}
}

class Admin extends User {
    constructor(name, location, role) {
        super(name, location);
        this.role = role;
    }
}
```

## Constructor's under the hood

```javascript
// Constructor Function (ES5)
function User(name, location) {
	this.name = name;
	this.location = location;
}
```

## Prototype Model

`__proto__` is a property that is available on every object in JavaScript. The prototype property is used primarily for inheritance; you add methods and properties on a function's prototype property to make those methods and properties available to instances of that function.

```javascript
Array.prototype(); // Array Methods

User.prototype.login = function () {
	// Prototype Methods
	console.log("User logged in");
	return this;
};
```

## Built-in Objects

Everything ultimately derives from the `Object` constructor.
