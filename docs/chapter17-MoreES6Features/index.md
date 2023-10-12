# Chapter17 - More ES6 Features

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Voriges Kapitel](/Modern-Javascript-Course/chapter15-DatabasesFirebase/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter18-ModernWorkflow/)

---

With ES6, a lot of new features were introduced. In this chapter, we will take a look at some of them.

## Spread and Rest Operators

### Spread Operator

> Spread Operator: Used to split up array elements OR object properties

```javascript
const numbers = [1, 2, 3];
// creates a copy of the array
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]
```

```javascript
const person = {
	name: "Max",
};

const newPerson = {
	...person,
	age: 28,
};
```

### Rest Operator

> Rest Operator: Used to merge a list of function arguments into an array

```javascript
// takes all arguments and puts them into an array
const filter = (...args) => {
	return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3)); // [1]
```

## Destructuring

> Easily extract array elements or object properties and store them in variables

```javascript
const person = {
	name: "Max",
};

const { name } = person; // name = 'Max'
```

## Shorthand Properties

```javascript
const name = "Max";
const age = 28;

const person = {
	name, // name: name
	age, // age: age
};
```

## Sets

> A set is a collection of unique values

```javascript
const ids = new Set([1, 2, 3]);
ids.add(2); // Will not be added
ids.has(1); // true
ids.delete(1);

const uniqueNames = [...new Set(["Max", "Manuel", "Max"])]; // ["Max", "Manuel"
```

## Maps

> A map is a collection of key-value pairs

```javascript
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
```

## Symbols

> A symbol is a unique identifier

```javascript
const id = Symbol();
const courseInfo = { title: "JavaScript - The Complete Guide" };

courseInfo[id] = 12345;
```
