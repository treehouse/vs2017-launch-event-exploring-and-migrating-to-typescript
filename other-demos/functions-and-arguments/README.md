
# Functions and Arguments

If you have functions that use the `arguments` object, you'll need to define function overloads

```
function sum(f: (x: number) => void, nums: number[]): void;
function sum(f: (x: number) => void, ...nums: number[]): void;
function sum() {
  ...
}

sum((x) => console.log(x));
sum((x) => console.log(x), 1, 2, 3, 4);
sum((x) => console.log(x), [1, 2, 3, 4]);
```
