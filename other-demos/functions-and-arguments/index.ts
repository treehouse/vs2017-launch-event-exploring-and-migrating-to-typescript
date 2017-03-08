
function sum(f: (x: number) => void, nums: number[]): void;
function sum(f: (x: number) => void, ...nums: number[]): void;
function sum() {
  let values = [];

  if (arguments.length === 2 && Array.isArray(arguments[1])) {
    values = values.concat(arguments[1]);
  } else {
    let argumentsArray = Array.prototype.slice.call(arguments);
    values = values.concat(argumentsArray.slice(1));
  }

  let result = values.reduce((acc, val) => {
    return acc + val;
  }, 0);

  arguments[0](result);
}

sum((x) => console.log(x));
sum((x) => console.log(x), 1, 2, 3, 4);
sum((x) => console.log(x), [1, 2, 3, 4]);
