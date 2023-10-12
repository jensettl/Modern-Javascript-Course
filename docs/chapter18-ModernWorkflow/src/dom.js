console.log("DOM File");

const body = document.querySelector("body");
const styleBody = () => {
	body.style.background = "crimson";
};

const addTitle = (text) => {
	const title = document.createElement("h1");
	title.textContent = text;
	body.appendChild(title);
};
