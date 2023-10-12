// DOM Queries
const chatList = document.querySelector(".chat-list"); // ul
const newChatForm = document.querySelector(".new-chat"); // form to add new chat
const newNameForm = document.querySelector(".new-name"); // form to change username
const updateMsg = document.querySelector(".update-msg"); // div to show update message
const chatRooms = document.querySelector(".chat-rooms"); // div to show chat rooms

// check local storage for a name
const username = localStorage.username ? localStorage.username : "anonymous";

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

// add a new chat
newChatForm.addEventListener("submit", (e) => {
	e.preventDefault(); // prevent default action
	const message = newChatForm.message.value.trim();
	chatroom
		.addChat(message)
		.then(() => newChatForm.reset()) // clear the form
		.catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// update name via chatroom
	const newName = newNameForm.name.value.trim();
	chatroom.updateName(newName);
	// reset the form
	newNameForm.reset();
	// show then hide the update message
	updateMsg.innerText = `Your name was updated to ${newName}`;
	setTimeout(() => (updateMsg.innerText = ""), 3000);
});

// update chatRoom
chatRooms.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
		chatUI.clear();
		chatroom.updateRoom(e.target.getAttribute("id"));
		chatroom.getChats((data) => chatUI.render(data));
	}
});

// get chats and render
chatroom.getChats((data) => chatUI.render(data));
