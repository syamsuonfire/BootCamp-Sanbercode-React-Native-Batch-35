// Soal No. 2 Promise

var readBooksPromise = require("./promise.js");

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
];

var booksQueue = books.length;
var time = 10000;

function execute(time, index, booksQueue) {
    readBooksPromise(time, books[index])
        .then(function (remainingTime) {
            time = remainingTime;
            console.log("Sisa waktu", time);
            booksQueue = booksQueue - 1;
            if (booksQueue > 0) {
                execute(time, index + 1, booksQueue);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

execute(time, 0, booksQueue);
