"use strict";
var Rating = require("./rating");
var Book = (function () {
    function Book(title, publisher) {
        this.ratings = [];
        this.title = title;
        this.publisher = publisher;
    }
    Book.prototype.addRating = function (username, rating, comment) {
        var ratingObj = new Rating(username, rating, comment);
        this.ratings.push(ratingObj);
        return ratingObj;
    };
    return Book;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Book;
