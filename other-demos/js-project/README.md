
# Demo - JavaScript Project

[https://code.visualstudio.com/Docs/languages/javascript](https://code.visualstudio.com/Docs/languages/javascript)

## Out of the Box Experience

* VS Code will now automatically include all JS files in your project
 * This previously was only true if you were using modules or you had a `jsconfig.json` file in the root of your project

## Automatic Type Acquisition

* VS Code will automatically download TypeScript declaration files when you `require` or `import` a library
* You can alternately specify list packages to download typings for in the `jsconfig.json` file

```
"typeAcquisition": {
  "include": [
    "lodash"
  ]
}
```

## JavaScript Project

Reasons to add a `jsconfig.json` file to your project

* Not every file should be included in your project
* Your workspace has more than one project context
* You want to down-level compile your JS

```
{
  "compilerOptions": {
    "target": "ES6"
  },
  "exclude": [
    "node_modules"
  ]
}
```
