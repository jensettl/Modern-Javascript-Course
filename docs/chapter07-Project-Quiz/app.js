const correctAnswers = ["A", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let score = 0;
	const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

	// check answers
	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 33.3;
		}
	});

	// console.log(score);

	// show the result
	window.scrollTo(0, 0);

	result.classList.remove("d-none");

	let output = 0;
	const timer = setInterval(() => {
		result.querySelector("span").textContent = `${output}%`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	}, 25);
});
