
# Hybrid Project

## `allowJs` Compiler Option

You can selectively convert JS files to TS.

Add a `tsconfig.json` file to the project with support for JS files.

```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "allowJs": true,
        "outDir": "dist"
    },
    "exclude": [
        "dist"
    ]
}
```

Code in JS files can see code in TS files and vice versa.

## Adding `d.ts` Files to Refine JavaScript Types

You can add `d.ts` files to provide type information for the JavaScript files in your project.

```
declare class Rating {
  username: string;
  rating: number;
  comment: string;

  constructor(username: string, rating: number, comment: string);
}

export = Rating;
```

## Language Service Benefits

The TypeScript language service give us the ability to navigate by symbols.

* Goto definition
* Peek definition
* Find all references

We can also rename by symbol.
