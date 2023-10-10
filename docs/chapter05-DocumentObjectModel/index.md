# Chapter05 - Document Object Model

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter06-FormAndFormEvents)

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

> The DOM represents a tree structure of nodes and objects. Nodes can be accessed and modified with JavaScript. With the DOM you can create, delete, and modify elements and attributes or react to user events like mouse clicks, page navigation, and more.

## The DOM

The DOM has different properties and methods to access and modify the document.

```javascript
document; // the document object
document.title; // the title of the document
document.URL; // the URL of the document
document.location; // the location of the document
document.getElementById(); // returns an element by its id
```

## Query Selector

The query selector is used to select elements from the DOM. The query selector is a method of the document object.

> The query selector returns the first element that matches the selector. The query selector returns `null` if no element matches the selector.

> Hint: Right-Click on an element in the developer tools to copy the query selector of the element.

```javascript
let para = document.querySelector("p"); // select by tag
let para = document.querySelector("#page-title"); // select by id
let para = document.querySelector(".error"); // select by class

const paras = document.querySelectorAll("p"); // select all elements in a NodeList
```

## Other Ways to Query the DOM

```javascript
const title = document.getElementById("page-title"); // select by id
const errors = document.getElementsByClassName("error"); // select by class as a HTMLCollection
const paras = document.getElementsByTagName("p"); // select by tag as a HTMLCollection
```

## Adding & Changing Page Content

_index.html_

```html
...
<body>
	<h1 id="page-title">DOM Manipulation</h1>
	<p id="error" class="error">This is an error message.</p>
	<div class="container">
		<p>This is another paragraph.</p>
	</div>
	<script src="app.js"></script>
</body>
```

_app.js_

```javascript
const para = document.querySelector("p");

para.innerText = "This is a new paragraph."; // change the text of the paragraph
para.innerText += "You can also add content."; // append text to the paragraph

const container = document.querySelector(".container");

content.innerHTML = "<h2>This is now a heading.</h2>"; // change the HTML of the container
```

## Getting & Setting Attributes

_index.html_

```html
...
<body>
	<h1 id="page-title">DOM Manipulation</h1>
	<a href="https://www.google.com" id="link">Google</a>
	<script src="app.js"></script>
</body>
```

_app.js_

```javascript
const link = document.querySelector("a");

console.log(link.getAttribute("href")); // get the href attribute of the link

link.setAttribute("href", "https://www.bing.com"); // set the href attribute of the link
link.innerText = "Bing"; // change the text of the link
```

## Changing CSS Styles

By changing the CSS styles of an element, you can change the appearance of the element like the font size, the color, the background color, and more.

> Use the `style` property to get and set the CSS styles of an element.

_app.js_

```javascript
const title = document.querySelector("#page-title");

console.log(title.style); // get the style of the title
title.style.color = "red"; // change the color of the title
```

## Adding & Removing Classes

You can add and remove classes to an element. Classes are used to style elements with CSS. You can add multiple classes to an element. You can also check if an element has a specific class.

> Use the method `.classList` to get the classes of an element and `.add` and `.remove` to add and remove classes. `.toggle` is used to add a class if it does not exist and remove it if it exists.

_app.js_

```javascript
const content = document.querySelector("p");

console.log(content.classList); // get the classes of the content
content.classList.add("error"); // add a class to the content
content.classList.remove("error"); // remove a class from the content
```

## Parents, Children & Siblings

You can access the parent, children, and siblings of an element by using the properties `.parentElement`, `.children`, `.nextElementSibling`, and `.previousElementSibling`.

> With `Array.from()` you can convert a HTMLCollection or NodeList to an array.

_index.html_

```html
...
<body>
    <h1 id="page-title">DOM Manipulation</h1>
    <article>
        <h2 id="page-title">DOM Manipulation</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </article>
    <script src="app.js"></script>
</body>
```

_app.js_

```javascript
const article = document.querySelector("article");

Array.from(article.children).forEach((child) => {
	child.classList.add("article-element");
});

const title = document.querySelector("#page-title");

console.log(title.parentElement); // get the parent of the title
console.log(title.nextElementSibling); // get the next sibling of the title
```

## Event Basics

You can add event listeners to elements. Event listeners are used to react to user events like mouse clicks, page navigation, and more.

> Use the method `.addEventListener()` to add an event listener to an element. The first argument is the event type and the second argument is a callback function that is executed when the event occurs.

_app.js_

```javascript
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
	console.log("Button clicked.");
	console.log(event);
});
```

## Creating & Removing Elements

You can create and remove elements from the DOM by using the methods `.createElement()` and `.remove()`. You can also append elements to other elements by using the methods `.appendChild()` and `.prepend()`.

> Use the method `.remove()` to remove an element from the DOM.

_index.html_

```html
...
<body>
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
	<script src="app.js"></script>
</body>
```

_app.js_

```javascript
const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");

items.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.target.remove(); // remove the clicked item
	});
});

button.addEventListener("click", (event) => {
	const li = document.createElement("li"); // create a new list item
	li.textContent = "Item 4"; // set the text of the list item
	ul.append(li); // append the list item to the list
});
```

## Event Bubbeling

Event bubbeling is used to react to events on parent elements. If you click on a child element, the event is also triggered on the parent element.

> Use the method `.stopPropagation()` to stop the event bubbeling.

```javascript
items.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.target.remove(); // remove the clicked item
		e.stopPropagation(); // stop the event bubbeling
	});
});
```

## More DOM Events

There are many more DOM events like `mouseover`, `mouseout`, `mousemove`, `keydown`, `keyup`, `focus`, `blur`, and more.

> You can find a list of all DOM events [here](https://developer.mozilla.org/en-US/docs/Web/Events).

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter06-FormAndFormEvents)
