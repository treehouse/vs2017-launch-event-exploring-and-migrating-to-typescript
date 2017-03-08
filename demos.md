
# Demos

## Overview of the Demo App

* The demo app is an ASP.NET Core configured to serve static files
* The app is intentionally simple and small
* Please imagine that this is just a slice of a much bigger application
* Multiply everything that we see by a factor of 10
* JavaScript files
 * Models... Version and Framework... one ES2015 class and one constructor function
 * data.js... provides the `getData` method
 * app.js... calls the `getData` method, builds up a string of HTML, and appends that string to the DOM

## Improved JS Editor in VS 2017

Let's start by taking a look at the improved JS editor in VS 2017

* Hover over a function and see information about that item
* Navigate to the definition of an item in the same file
* Navigate to the definition of an item in a different file... without having to add a reference (i.e. `/// <reference path="data.js" />`)
* Peek the definition
* Find all references
* "Go To" can be used to navigate to JS items
* Renaming support

## IntelliSense for External Libraries

VS will also provide us with IntelliSense for external libraries like jQuery

* This works for...
 * package.json packages
 * bower.json packages
 * Or loose files in your project that match a list of ~400 popular JS libraries

## VS 2017 JS Editor and the TypeScript Language Service

* So, how is VS able to do all of this?
* In addition to a compiler, TypeScript provides a language service that can be used by editors or IDEs to introspect into your code
* The TypeScript Language Service is being used to supercharge the JS editor
 * That's how the IntelliSense is working... it's not just a simple autocomplete, i.e. you've typed this before
 * That's also how refactoring is being supported
* This is being done for us automatically, under the covers... without having to compile our code

## Refining Type Information - Part 1

* When we hover over a function VS will display information about that item
* The keywords after the colons ":" indicate the expected data types
* Notice that the function parameters are marked as `any`
 * This means that we can pass any data type
 * That's probably not what the author of this function intended
* We can use JSDoc comments to refine the data types
 * This helps us express the intent of our code

## Creating a TypeScript Project

We can benefit further from TypeScript by leveraging the TypeScript compiler

* Move input files into a "Client" folder
* Add tsconfig.json file to the root of the project to configure the TypeScript compiler  
 * Set `target` to `es5` to downlevel compile our JS files
 * Set `allowJs` compiler option to `true`
 * Set `outDir` to the output folder `wwwroot/scripts`
 * Add `include` property and include the "Client" folder

```
{
	"compilerOptions": {
		"target": "es5",
		"allowJs": true,
		"outDir": "wwwroot/scripts"
	},
	"include": [
		"Client"
	]
}
```

Build your project to compile your TypeScript files to JavaScript.

_Note: If you get a "Duplicate Content items" build error, edit your project's csproj file and manually remove the duplicate Content items_

_Note: If you open one of the generated JS files, be sure to close it. If you don't, that file won't get updated on subsequent builds._

## Benefits

* You can use ES6/ES7 features and have then down compile to ES5
 * This gives us the ability to leverage newer JS features and not worry if they are widely supported
* You can also catch certain bugs with
 * `noFallthroughCasesInSwitch`
 * `allowUnreachableCode`

## Why Migrate to TypeScript?

* We can still make mistakes
* Leaving our code in JS files doesn't allow the compiler to report those errors

## Introducing TypeScript

_Demo: Open language overview demo in VS Code_

* Superset of JavaScript
* Static typing
* Type inference
 * Inferred vs explicit return type
 * Inferrence via variable assignment
* Interfaces
* Classes
 * Private members
 * Readonly members
* Namespaces
* Modules

## Migrating to TS

* Selectively converting JS files to TS
* Ability to add optional types
* Ability to define interfaces

### What to Convert First?

* Short
* Simple
* Referenced
* Has Tests
* Self-Contained
* "Owned"

### Convert a Class to Use TS

* Convert the Version class
* Show some of the gotchas
* Converting a file to use TS will likely introduce errors
* TS wants you to be more explicit
* Explain that TS will emit JS even when there's a compilation error
 * Show how to configure the compiler to not emit JS
* Convert the `Framework` constructor function to be a class
 * Update the Version class `supportedFrameworks` property

### Catching Hard to Find Bugs

* Run the app and show that we're getting two errors in the console
* Convert the last two files to TypeScript
* And... we get compilation errors!
* Fix the errors in the data and remove the hack

### Adding Namespaces

* We're currently polluting the global context
* Wrap our code into namespaces

## Drawbacks of Adding a tsconfig.json File

Now that we have a tsconfig.json file as part of our project, we need to manually download type definition files for any external JS libraries that we're using.

* Previously, this was being done for us automatically using a feature called "Automatic Type Aquisition"
* Now we have to use the Node package manager npm to acquire our type definition files
* First we need to initialize our project to use the npm package manager
* Then we need to install the type definition file for "jquery"
 * We do that by installing the "jquery" package in the "@types" scoped package
 * A scoped npm package is a collection or group of packages that is created from the DefinitelyTyped GitHub repo (https://github.com/DefinitelyTyped/DefinitelyTyped)
* DefinitelyTyped is a community maintained repo of TypeScript type definition files

```
npm init -y
npm install @types/jquery --save-dev
```

_Demo: Show the contents of the jquery type definition file_
