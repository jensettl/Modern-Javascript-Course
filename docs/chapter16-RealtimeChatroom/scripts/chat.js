/**
 * Represents a chatroom.
 * @class
 */
class Chatroom {
	/**
	 * Creates a new Chatroom.
	 * @param {string} room - The name of the chatroom.
	 * @param {string} username - The username of the user.
	 */
	constructor(room, username) {
		this.room = room;
		this.username = username;
		this.chats = db.collection("chats");
		this.unsub;
	}

	/**
	 * Adds a new chat message to the chatroom.
	 * @async
	 * @param {string} message - The message to add.
	 * @returns {Promise} A promise that resolves when the chat message has been added.
	 */
	async addChat(message) {
		// format a chat object
		const now = new Date();
		const chat = {
			message: message,
			username: this.username,
			room: this.room,
			created_at: firebase.firestore.Timestamp.fromDate(now),
		};
		// save the chat document
		const response = await this.chats.add(chat);
		return response;
	}

	/**
	 * Gets all the chat messages in the chatroom.
	 * @param {function} callback - A function to call when a new chat message is added.
	 */
	getChats(callback) {
		this.unsub = this.chats
			.where("room", "==", this.room)
			.orderBy("created_at")
			.onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === "added") {
						// update the ui
						callback(change.doc.data());
					}
				});
			});
	}

	/**
	 * Updates the username of the user.
	 * @param {string} username - The new username.
	 */
	updateName(username) {
		this.username = username;
		localStorage.setItem("username", username);
	}

	/**
	 * Updates the chatroom.
	 * @param {string} room - The new chatroom.
	 */
	updateRoom(room) {
		this.room = room;
		console.log("room updated");
		if (this.unsub) {
			// unsubscribe from changes
			this.unsub();
		}
	}
}
