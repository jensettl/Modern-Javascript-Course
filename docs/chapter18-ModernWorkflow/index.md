# Chapter18 - Modern Workflow with Babel & Webpack

[< Previous Chapter](/Modern-Javascript-Course/chapter17-MoreES6Features) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter19-UsingFirebaseDatabase/)

---

## Modern Feature Support

Some features are not supported by all browsers. To make sure that our code works in all browsers, we can use a tool called Babel.

## Babel

Babel is a JavaScript compiler that converts modern JavaScript into a version of JavaScript that is compatible with all browsers. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

### Using Babel

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Create a `.babelrc` file in the root directory of the project

Add the following code to the `.babelrc` file:

```json
{
	"presets": ["@babel/preset-env"]
}
```

## Installing Node.js & Babel

To install Babel, we first need to install Node.js. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is used to run JavaScript on the server. To install Node.js, we can go to [nodejs.org](https://nodejs.org/en/) and download the latest version. After installing Node.js, we can check if it is installed correctly by running the following command in the terminal:

```bash
node -v
```

## Using Babel CLI

To use Babel, we can use the Babel CLI. To install the Babel CLI, we can run the following command in the terminal:

```bash
node_modules/.bin/babel before.js -o after.js
```

## NPM Scripts & Watching Files

To make it easier to use Babel, we can add a script to the `package.json` file. To do this, we can add the following code to the `package.json` file:

> The `-w` flag is used to watch the files for changes.

```json
"scripts": {
    "build": "npx babel src/index.js -w -o dist/assets/bundle.js"
}
```

## Webpack

Webpack is a module bundler for JavaScript. Webpack takes modules with dependencies and generates static assets representing those modules.

> When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## Setting up a Webpack File

To set up a Webpack file, we first need to install Webpack. To install Webpack, we can run the following command in the terminal:

```bash
npm install --save-dev webpack webpack-cli
```

After installing Webpack, we can create a `webpack.config.js` file in the root directory of the project. In the `webpack.config.js` file, we can add the following code:

```js
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist/assets"),
	},
};
```

## Using Webpack

To use Webpack, we can add a script to the `package.json` file. To do this, we can add the following code to the `package.json` file:

```json
"scripts": {
    "build": "npx webpack -w --config webpack.config.js"
}
```

## Introduction to Modules

Modules are reusable pieces of code that can be exported from one program and imported for use in another program.

- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep information private and protected from other modules;

You can define and create your own modules in Node.js using the `export` keyword.

_index.js_

```js
export const add = (x, y) => {
	return x + y;
};

// export { add, substract, multiply, divide };
```

_app.js_

```js
import { add } from "./index.js";

console.log(add(1, 2));
```

> Default imports and exports are useful to import or export only a single feature from a file by using `export default ...` and `import ... from` syntax (without curly braces).

## Production & Development Mode with Webpack

We can use `webpack-dev-server` to run our code in development mode. To deploy our code to production, we can use `webpack` to build our code as before.

> The `webpack-dev-server` provides you with a simple web server and the ability to use live reloading.

To specify the modes, we have to adjust the commands in `package.json`

```json
scripts: {
    "build": "webpack -w --mode production",
    "start": "webpack-dev-server -w --mode development --open"
}
```

## Webpack & Babel Together

To use Webpack and Babel together, we have to make changes to the `webpack.config.js` file. To do this, we can add the following code to the `webpack.config.js` file:

> `babel-loader` has to be installed via npm

The final `webpack.config.js` file could look like this:

```js
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		publicPath: "/assets/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
```

---

[< Previous Chapter](/Modern-Javascript-Course/chapter17-MoreES6Features) | [**Back to Overview**](/Modern-Javascript-Course/) | [Next Chapter >](/Modern-Javascript-Course/chapter19-UsingFirebaseDatabase/)
