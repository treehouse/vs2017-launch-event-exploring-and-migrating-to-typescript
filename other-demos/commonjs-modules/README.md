
# CommonJS Modules

## How the Compiler Identifies Modules

* Any file that has a top-level `import` or `export` will be treated as a module
* Without that, the JS in your files will be placed in the global namespace

## Importing Modules

To get type information from the module you're importing, you need to switch to using `import`

```
var foo = require("foo");
foo.doStuff();
```

Becomes...

```
import foo = require("foo");
foo.doStuff();
```

## Exporting from Modules

Change...

```
module.exports.feedPets = function(pets) {
  // ...
}
```

To...

```
export function feedPets(pets) {
  // ...
}
```

Or...

```
function foo() {
  // ...
}
module.exports = foo;
```

To...

```
function foo() {
  // ...
}
export = foo;
```
