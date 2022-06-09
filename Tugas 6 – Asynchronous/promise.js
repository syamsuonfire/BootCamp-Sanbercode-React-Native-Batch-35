// Soal No. 2 Promise

function readBooksPromise(time, book) {
    console.log(`saya mulai membaca ${book.name}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let sisaWaktu = time - book.timeSpent;
            if (sisaWaktu >= 0) {
                console.log(
                    `saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`
                );
                resolve(sisaWaktu);
            } else {
                console.log(
                    `saya sudah tidak punya waktu untuk membaca ${book.name}`
                );
                reject(sisaWaktu, "ini sisa waktu saya");
            }
        }, book.timeSpent);
    });
}

module.exports = readBooksPromise;
