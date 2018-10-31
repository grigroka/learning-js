'use strict';

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was writen by ${this.author} in ${this.year}.`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2015',
    getSummary: function () {
        return `${this.title} was writen by ${this.author} in ${this.year}.`;
    }
};

// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book2));