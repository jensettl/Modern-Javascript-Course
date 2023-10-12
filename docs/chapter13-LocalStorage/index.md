# Chapter13 - LocalStorage

[< Previous Chapter](/Modern-Javascript-Course/chapter11-AsyncJavaScript) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter14-ObjectOrientedJavaScript/)

---

## What is Local Storage

Local Storage is a way to store data in the browser. It is a key value store. It is a way to store data in the browser that persists even after the browser is closed.

> `Local Storage` is a way to store data in the browser that persists even after the browser is closed as `key value pairs`.

## Storing & Retrieving Data

### Storing Data

```javascript
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// update data
localStorage.age = "31";
```

### Retrieving Data

```javascript
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
```

## Deleting Data

```javascript
localStorage.removeItem("name");
```

## Stringifying & Parsing Data

### Stringifying Data

```javascript
const todos = [
	{ text: "Play Guitar", author: "John" },
	{ text: "Play Piano", author: "Jane" },
];

localStorage.setItem("todos", JSON.stringify(todos));
```

### Parsing Data

```javascript
const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
```

---

[< Previous Chapter](/Modern-Javascript-Course/chapter11-AsyncJavaScript) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter14-ObjectOrientedJavaScript/)
