'use strict';

import Book from './models/book';

const book1 = new Book('Copying and Pasting from Stack Overflow', 'O\'Reilly Media');
const book2 = new Book('Resumé Driven Development', 'O\'Reilly Media');
const book3 = new Book('Blaming the User', 'O\'Reilly Media');
const book4 = new Book('Googling the Error Message', 'O\'Reilly Media');
const book5 = new Book('Whiteboard Interviews', 'O\'Reilly Media');
const book6 = new Book('Writing Code that Nobody Else Can Read', 'O\'Reilly Media');
const book7 = new Book('"Temporary" Workarounds', 'O\'Reilly Media');
const book8 = new Book('Trying Stuff Until it Works', 'O\'Reilly Media');
const book9 = new Book('Rewriting Your Front End Every Six Weeks', 'O\'Reilly Media');
const book10 = new Book('Taking on Needless Dependencies', 'O\'Reilly Media');

const rating1 = book1.addRating('johnsmith', 4, 'Love this book!');
const rating2 = book1.addRating('sallyjones', 2, 'This book was riddled with mistakes.');
