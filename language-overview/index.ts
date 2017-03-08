
// Language Overview Demos


// Static Typing

// function add(number1, number2) {
//   return number1 + number2;
// }

// let addResult = add(1, 2);
// console.log(addResult);


// Type Inference

// let myBooleanVar = false;
// let myNumberVar = 0;
// let myStringVar = '';
// let myAnyVar;
// let myNullAnyVar = null;

// let myNumberArrayVar = [1, 2, 3];
// let myStringArrayVar = ['', '', ''];


// Interfaces

// interface MyInterface {
//   number1: number;
//   number2: number;
//   add(number1: number, number2: number): number;
// }

// function myFunction(obj: MyInterface) {
//   return obj.add(obj.number1, obj.number2);
// }

// let result = myFunction({
//   number1: 1,
//   number2: 2,
//   add: (number1, number2) => {
//     return number1 + number2;
//   }
// })

// console.log(result);


// Classes

// class MyClass {
//   number1: number;
//   readonly number2: number;

//   constructor(number1: number, number2: number) {
//     this.number1 = number1;
//     this.number2 = number2;
//   }

//   add() {
//     return this.number1 + this.number2;
//   }

//   private hidden() {
//   }
// }

// let myClass = new MyClass(1, 2);

// console.log(myClass.number1);
// console.log(myClass.number2);
// console.log(myClass.add());

// myClass.hidden(); // error - hidden method isn't accessible
// myClass.number2 = 2; // error - can't set a readonly property


// Namespaces

// namespace MyNamespace {
//   export function publicFunction() {
//     console.log("I'm callable from outside of the namespace!");
//   }
//   function privateFunction() {
//     console.log("I'm not callable outside of the namespace!");
//   }
// }


// Modules

// export function publicFunction() {
//   console.log("I'm callable from outside of the module!");
// }

// function privateFunction() {
//   console.log("I'm not callable outside of the module!");
// }
