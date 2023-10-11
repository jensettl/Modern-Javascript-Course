# Chapter06 - Forms & Form Events

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter07-Project-Quiz)

Forms are used to collect user input. They are used to create logins, contact forms, and more. Forms are made up of form elements like inputs, buttons, checkboxes, and more.

## Events Inside Forms

Forms have their own events like `submit`, `change`, `input`, `focus`, `blur`, and more.

## Submit Events

The `submit` event is triggered when the user submits the form. The `submit` event is triggered on the form element.

> Use the method `.preventDefault()` to prevent the default behavior of the form.

```html
<form>
	<input type="text" id="username" />
	<input type="submit" value="Submit" />
</form>
```

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault(); // prevent the default behavior of the form
	console.log("Form submitted");
	form.username.value = ""; // clear the input field
});
```

## Regular Expressions

Regular expressions are used to validate user input. They are used to check if the user input is a valid email address, a valid password, and more.

> You can find a list of all regular expressions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

```javascript
const username = "max";
const pattern = /^[a-zA-Z]{6,}$/; // regular expression
const result = pattern.test(username); // test the username
console.log(result); // false
```

## Basic Form Validation

You can use regular expressions to validate user input.

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const usernameValue = form.username.value;
	const pattern = /^[a-zA-Z]{6,}$/; // regular expression
	const result = pattern.test(usernameValue); // test the username

	result ? console.log("Valid username") : console.log("Invalid username"); // log the result
	form.username.value = ""; // clear the input field
});
```

## Keyboard Events

Keyboard events are used to react to keyboard input. They are used to react to key presses, key releases, and more.

> You can find a list of all keyboard events [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent).

```javascript
const form = document.querySelector("form");

form.username.addEventListener("keyup", (event) => {
	console.log(event.target.value); // log the value of the input field
});
```

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter07-Project-Quiz)
