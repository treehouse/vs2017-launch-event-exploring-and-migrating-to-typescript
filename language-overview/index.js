"use strict";
exports.__esModule = true;
function publicFunction() {
    console.log("I'm callable from outside of the module!");
}
exports.publicFunction = publicFunction;
function privateFunction() {
    console.log("I'm not callable outside of the module!");
}
