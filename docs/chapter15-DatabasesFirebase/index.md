# Chapter15 - Databases Firebase

[< Previous Chapter](/Modern-Javascript-Course/chapter14-ObjectOrientedJavaScript) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter17-MoreES6Features)

---

## NoSQL Databases

NoSQL databases are `non-relational databases`. They are document based, key-value pairs, graph databases or wide-column stores. They are `flexible`, scalable and provide `high performance`. `Collections` are the equivalent of tables in a relational database, and `documents` are the equivalent of records.

> SQL databases are `relational databases`. They are table based databases, with a fixed schema and are `not scalable`.

## Firebase & Firestore

Firebase is a `backend-as-a-service` (BaaS) that provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure.

Firestore is a `NoSQL database` that stores data in the form of documents. It is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.

## Connecting to Firestore

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/)
2. Add a new web app to the project
3. Copy the config object from the Firebase SDK snippet
4. Create a new file `firebase.js` in the `js` folder
5. Paste the config object into the file
6. Add the following code to the file:

```javascript
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```

## Getting Collections

> `.get()` returns a promise

```javascript
db.collection("users")
	.get()
	.then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			console.log(doc.data()); // returns all documents in the collection
		});
	});
```

## Saving Documents

> `.add()` returns a promise

```javascript
db.collection("users")
	.add({
		name: "John",
		location: "Berlin",
	})
	.then((docRef) => {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch((error) => {
		console.error("Error adding document: ", error);
	});
```

## Deleting Documents

> `.delete()` returns a promise

```javascript
db.collection("users")
	.doc("doc-id")
	.delete()
	.then(() => {
		console.log("Document successfully deleted!");
	})
	.catch((error) => {
		console.error("Error removing document: ", error);
	});
```

## Real-time Listeners

> `.onSnapshot()` returns a function

```javascript
// get all documents in the collection
db.collection("users").onSnapshot((snapshot) => {
	snapshot.docChanges().forEach((change) => {
		if (change.type === "added") {
			console.log("New user: ", change.doc.data());
			// add the document to the DOM
			// addUser(change.doc.data(), change.doc.id);
		}
		if (change.type === "modified") {
			console.log("Modified user: ", change.doc.data());
			// do something with the modified document
		}
		if (change.type === "removed") {
			console.log("Removed user: ", change.doc.data());
			// delete the document from the DOM
		}
	});
});
```

## Unsubscribing from Real-time Listeners

```javascript
const unsubscribe = db.collection("users").onSnapshot((snapshot) => {
	// ...
});

unsubscribe();
```

## References

[https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart)

[Course GitHub Repository](https://github.com/iamshaunjp/modern-javascript/blob/lesson-132/chapter_16/sandbox.js)

---

[< Previous Chapter](/Modern-Javascript-Course/chapter14-ObjectOrientedJavaScript) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter17-MoreES6Features)
