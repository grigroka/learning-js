'use strict';

// Constructor (name with uppercase)
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was writen by ${this.author} in ${this.year}.`;
    }
};

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book1.getSummary());
