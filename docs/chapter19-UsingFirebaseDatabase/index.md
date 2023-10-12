# Chapter19 - Using Firebase Databses Version 9

[< Previous Chapter](/Modern-Javascript-Course/chapter18-ModernWorkflow) | [**Back to Overview**](/Modern-Javascript-Course/)

---

## What's new in Firebase 9?

It is a modular SDK that allows us to import only the parts of Firebase that we need. This makes the bundle size smaller and improves performance. The new SDK also uses the new JavaScript module syntax.

> Supports `treeshaking`: The process of removing unused code from a bundle. This is useful for reducing the amount of code that needs to be sent to the client.

## Webpack Setup for Firebase 9

> **Note**: Only necessary if you want to use the new Firebase 9 SDK with your project build from scratch. If you initalize a new project with e.g. `create-react-app` you can skip this step.

1. `npm init` to create a new project
2. `npm install webpack webpack-cli --save-dev` to install webpack
3. Create `webpack.config.js` file
4. `npm install firebase` to install firebase

## Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a web app to the project
4. Copy the config object

## Initialize Firebase

1. Create a new file `firebase.js` in the `src` folder

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	// Your web app's Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Firestore Setup & Fetching Data

1. Go to the [Firestore Console](https://console.firebase.google.com/u/0/project/your-project-name/firestore)
2. Create a new database
3. Create a collection
4. Create a document
5. Click `Save`

To fetch data from the database we need to import the `getFirestore` function from the `firebase/firestore` package.

```js
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
```

We can then use the `getFirestore` function to get a reference to the database. We can then use the `collection` function to get a reference to a collection.

```js
const db = getFirestore();

const collectionRef = collection(db, "collection-name");

// Get all documents from the collection
const querySnapshot = await getDocs(collectionRef);

querySnapshot.then((snapshot) => {
	snapshot.forEach((doc) => {
		console.log(doc.id, " => ", doc.data());
	});
});

// Get a specific document from the collection
const docSnapshot = await getDoc(doc(collectionRef, "document-id"));

// Get the data from the document
const data = docSnapshot.data();
```

## Adding & Deleting Data

To add data to the database we need to import the `addDoc` function from the `firebase/firestore` package.

```js
import { addDoc, deleteDoc, doc, collection } from "firebase/firestore";
```

We can then use the `addDoc` function to add a new document to a collection.

```js
const db = getFirestore();

const collectionRef = collection(db, "collection-name");

// Adding Data
const docRef = await addDoc(collectionRef, {
	first: "Ada",
	last: "Lovelace",
	born: 1815,
});

// Deleting Data
await deleteDoc(doc(collectionRef, "document-id"));
```

---

[< Previous Chapter](/Modern-Javascript-Course/chapter18-ModernWorkflow) | [**Back to Overview**](/Modern-Javascript-Course/)
