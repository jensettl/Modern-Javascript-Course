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

// Async & Await
const getTodos = async () => {
	// Async function returns a promise
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await response.json();
	return data;
};

getTodos()
	.then((data) => console.log("Resolved:", data))
	.catch((err) => console.log("Rejected:", err));
