const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search");

const generateTemplate = (todo) => {
	const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;

	list.innerHTML += html;
};
// add todos
addForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const todo = addForm.add.value.trim().toLowerCase();
	// console.log(todo);
	if (todo.length) {
		generateTemplate(todo);
		addForm.reset();
		// addForm.add.value = "";
	}
});

// delete todos
list.addEventListener("click", (event) => {
	if (event.target.classList.contains("delete")) {
		event.target.parentElement.remove();
	}
});

const filterTodos = (term) => {
	// console.log(term);

	Array.from(list.children)
		.filter((todo) => !todo.textContent.includes(term))
		.forEach((todo) => todo.classList.add("filtered"));

	Array.from(list.children)
		.filter((todo) => todo.textContent.includes(term))
		.forEach((todo) => todo.classList.remove("filtered"));
};

// search todos
searchForm.addEventListener("keyup", () => {
	const term = searchForm.search.value.trim().toLowerCase();
	filterTodos(term);
});
