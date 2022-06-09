// Soal No. 1 Callback

var readBooks = require("./callback.js");

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "Komik", timeSpent: 1000 },
];

var booksQueue = books.length;
var time = 10000;

function execute(time, index, booksQueue) {
    readBooks(time, books[index], function (remainingTime) {
        time = remainingTime;
        booksQueue = booksQueue - 1;
        if (booksQueue > 0) {
            execute(time, index + 1, booksQueue);
        }
    });
}

execute(time, 0, booksQueue);
