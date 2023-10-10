# Chapter02 - Control Flow Basics

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter03-FunctionsAndMethods)

Control Flow is being used to execute code conditionally. Control Flow can be done with `if` statements, `else if` statements, `else` statements and `switch` statements.
Other than that there are loops like `for` loops, `while` loops and `do while` loops.

## For Loops

For Loops are used to execute code a certain amount of times. For Loops can be used with the `break` keyword to break out of the loop and with the `continue` keyword to skip the current iteration.

```javascript
for (let i = 0; i < 5; i++) {
	console.log("in loop:", i);
}
```

## While Loops

While Loops are used to execute code as long as a condition is true. While Loops can be used with the `break` keyword to break out of the loop and with the `continue` keyword to skip the current iteration.

```javascript
let i = 0;

while (i < 5) {
	console.log("in loop:", i);
	i++;
}
```

## Do While Loops

Do While Loops are used to execute code as long as a condition is true. Do While Loops can be used with the `break` keyword to break out of the loop and with the `continue` keyword to skip the current iteration.

```javascript
let i = 0;

do {
	console.log("in loop:", i);
	i++;
} while (i < 5);
```

## If Statements

If Statements are used to execute code conditionally. If Statements can be used with `else if` statements and `else` statements.

```javascript
const age = 25;

if (age > 20) {
	console.log("you are over 20 years old");
}
```

## Else If Statements

Else If Statements are used to execute code conditionally. Else If Statements can be used with `if` statements and `else` statements.

```javascript
const email = "johndoe@mail.com";

if (email.includes("@")) {
	console.log("valid email");
} else if (email.length > 10) {
	console.log("email is too long");
} else {
	console.log("email is too short");
}
```

## Logical Operators

Logical Operators are used to combine multiple conditions. Logical Operators can be used with `&&` (and), `||` (or) and `!` (not).

```javascript
const email = "johndoe@mail.com";

if (email.length <= 12 && email.includes("@")) {
	console.log("valid email");
}
```

## Logical NOT

Logical NOT is used to reverse a condition.

```javascript
const role = "admin";

if (role !== "admin") {
	console.log("you are not an admin");
}
```

## Break & Continue

`break` is used to break out of a loop. `continue` is used to skip the current iteration of a loop.

```javascript
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
	if (scores[i] === 0) {
		continue;
	}

	console.log("your score:", scores[i]);

	if (scores[i] === 100) {
		console.log("congrats, you got the top score!");
		break;
	}
}
```

## Switch Statements

Switch Statements are used to execute code conditionally. Switch Statements can be used with `case` statements and `default` statements.

```javascript
const color = "red";

switch (color) {
	case "red":
		console.log("color is red");
		break;
	case "blue":
		console.log("color is blue");
		break;
	default:
		console.log("color is not red or blue");
		break;
}
```

## Variables & Block Scope

The scope of a variable is the area of code where the variable can be accessed. Variables declared with `var` are function scoped. Variables declared with `let` and `const` are block scoped.

```javascript
let age = 30;

if (true) {
	let age = 40;
	let name = "shaun";
	console.log("inside 1st code block:", age, name); // 40, shaun

	if (true) {
		let age = 50;
		console.log("inside 2nd code block:", age); // 50
	}
}
```

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter03-FunctionsAndMethods)
