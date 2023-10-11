# Chapter11 - Async JavaScript

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter13-LocalStorage/)

Async JavaScript can be used to make requests to a server, and then do something with the response after it's returned.

## What is Async JavaScript?

Async JavaScript is a way of writing JavaScript code that allows other code to run while waiting for a response from an API or server.

### Async Code in Action

```javascript
// Synchronous code
const second = () => {
	console.log("Second");
};

const first = () => {
	console.log("Hey there");
	second();
	console.log("The end");
};

first();
```

```javascript
// Asynchronous code
const second = () => {
	setTimeout(() => {
		console.log("Async Hey there");
	}, 2000);
};

const first = () => {
	console.log("Hey there");
	second();
	console.log("The end");
};

first();
```

## What are HTTP Requests?

`HTTP Requests` are requests that are sent to a server to retrieve data or information. The server then sends a `repsonse` back to the client with the requested information. `Status codes` are sent with the response to tell the client if the request was successful or not.

> **Note:** HTTP Requests are not unique to JavaScript. They are used in all programming languages. `API Endpoints` are like URLs that we can make requests to.

## Making HTTP Requests (XHR)

`XMLHttpRequest` is a built-in browser object that allows us to make HTTP requests in JavaScript. It's an older way of making HTTP requests, but it's still used today. It's a bit more complicated to use than the newer `fetch()` method, but it's still good to know how it works.

```javascript
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
	if (request.status === 200) {
		console.log(request.responseText);
	} else if (request.readyState === 4) {
		console.log("Could not fetch the data");
	}
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // Method, URL
request.send(); // Send request
```

## Response Status Codes

`Status codes` are sent with the response to tell the client if the request was successful or not. There are many different status codes, but the most common ones are:

- 200: OK
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Callback Functions

A `callback function` is a function that is passed into another function as an argument, and then executed inside the function. Callback functions are used to make sure that certain code doesn't execute until other code has already finished execution.

```javascript
const getTodos = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		if (request.status === 200) {
			callback(undefined, request.responseText); // (error, data)
		} else if (request.readyState === 4) {
			callback("Could not fetch the data", undefined); // (error, data)
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

## JSON Data

`JSON` stands for `JavaScript Object Notation`. It's a way of storing and exchanging data. It's similar to an object literal, but it's stored as a string. It's commonly used for sending and receiving data from a server.

> JSON.parse() is used to convert JSON data into a JavaScript object.

```javascript
request.addEventListener("readystatechange", () => {
    if (request.status === 200) {
        callback(undefined, JSON.parse(request.responseText));
    } else if (request.readyState === 4) {
        callback("Could not fetch the data", undefined);
    }
});
};
```

## Callback Hell

`Callback Hell` is when you have a lot of nested callback functions. It makes the code difficult to read and debug.

```javascript
getTodos((err, data) => {
	console.log(data);
	getTodos((err, data) => {
		console.log(data);
		getTodos((err, data) => {
			console.log(data);
		});
	});
});
```

## Promises

`Promises` are a newer way of handling asynchronous requests. They are easier to read and debug than callback functions. They are also chainable, which means you can make multiple requests one after the other.

> Promises can be one of three states: pending (initial state; neither fulfilled nor rejected), fulfilled (completed successfully), or rejected (operation failed).

```javascript
const getSomething = () => {
	return new Promise((resolve, reject) => {
		// fetch data
		resolve(JSON.parse(request.responseText));
		reject("Some error");
	});
};

getSomething()
	.then((data) => {
		// .then() is called when the promise is fulfilled
		console.log(data);
	})
	.catch((err) => {
		// .catch() is called when the promise is rejected
		console.log(err);
	});
```

## Chaining Promises

Promises are chainable, which means you can make multiple requests one after the other.

```javascript
getTodos("https://jsonplaceholder.typicode.com/todos/1")
	.then((data) => {
		console.log("Promise 1 resolved:", data);
		return getTodos("https://jsonplaceholder.typicode.com/todos/2");
	})
	.then((data) => {
		console.log("Promise 2 resolved:", data);
		return getTodos("https://jsonplaceholder.typicode.com/todos/x"); // Invalid URL
	})
	.then((data) => {
		console.log("Promise 3 resolved:", data);
	})
	.catch((err) => {
		console.log("Promise rejected:", err);
	});
```

## Fetch API

The `Fetch API` is a newer way of making HTTP requests. It's easier to use than the older `XMLHttpRequest` method.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => {
		console.log("Resolved:", response); // Response object
		return response.json(); // Convert response to JSON
	})
	.then((data) => {
		console.log(data); // JSON data
	})
	.catch((err) => {
		console.log("Rejected:", err);
	});
```

## Async & Await

`Async & Await` is a newer way of handling asynchronous requests. It's easier to read and debug than promises.

```javascript
const getTodos = async () => {
	// async keyword makes the function return a promise
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await response.json();
	return data;
};

getTodos() // getTodos() returns a promise
	.then((data) => console.log("Resolved:", data))
	.catch((err) => console.log("Rejected:", err));
```

## Throwing & Catching Errors

`Throwing & Catching Errors` is a way of handling errors in JavaScript. It's used to make sure that certain code doesn't execute if an error occurs.

> **Note:** The `throw` keyword is used to throw an error. The `try...catch` statement is used to catch an error.

```javascript
const getTodos = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

	if (response.status !== 200) {
		throw new Error("Could not fetch the data");
	}

	const data = await response.json();
	return data;
};

getTodos()
	.then((data) => console.log("Resolved:", data))
	.catch((err) => console.log("Rejected:", err.message));
```

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter13-LocalStorage/)
