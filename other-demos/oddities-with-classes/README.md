
# Demo - Oddities with Classes

## Class Properties

Class properties must be explicitly declared

```
class Calculator {
  operand1;
  operand2;

  constructor(operand1, operand2) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  add() {
    return this.operand1 + this.operand2;
  }
}
```

## Prototype

Cannot extend the prototype without first defining the new method on an interface

```
interface Calculator {
  subtract(): number;
}

Calculator.prototype.subtract = function() {
  return this.operand1 - this.operand2;
};
```

## `this` and `any`

`this` will be of type `any` when used outside of a class

```
Calculator.prototype.subtract = function(this: Calculator) {
  return this.operand1 - this.operand2;
};
```
