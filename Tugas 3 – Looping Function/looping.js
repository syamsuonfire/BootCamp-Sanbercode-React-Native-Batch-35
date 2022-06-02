/*
 * Soal No. 1 Looping While
 */
/*
 * Jawaban Soal 1
 */
console.log("\nJawaban Soal 1\n");
console.log("LOOPING PERTAMA\n");
var i = 2;
while (i !== 21) {
    if (i % 2 == 0) console.log(i + " - I love coding");
    i++;
}

console.log("\nLOOPING KEDUA\n");
var i = 20;
while (i !== 0) {
    if (i % 2 == 0) console.log(i + " - I will become a mobile developer");
    i--;
}

/*
 * Soal No. 2 Looping menggunakan for
 */
/*
 * Jawaban Soal 2
 */
console.log("\nJawaban Soal 2\n");
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0 && i % 3 === 0) {
        console.log(i + " - I Love Coding");
    } else if (i % 2 == 0) {
        console.log(i + " - Berkualitas");
    } else if (i % 2 != 0) {
        console.log(i + " - Santai");
    }
}

/*
 * Soal No. 3 Membuat Persegi Panjang #
 */
/*
 * Jawaban Soal 3
 */
var square = "";
for (a = 1; a <= 4; a++) {
    for (b = 1; b <= 8; b++) {
        square += "#";
    }
    console.log(square);
    square = "";
}

/*
 * Soal No. 4 Membuat Tangga
 */
/*
 * Jawaban Soal 4
 */
var tangga = "";
for (var i = 7; i >= 1; i--) {
    for (var j = i; j <= 7; j++) {
        tangga += "#";
    }
    console.log(tangga);
    tangga = "";
}

/*
 * Soal No. 5 Membuat Papan Catur
 */
/*
 * Jawaban Soal 5
 */

var length = 8;
var board = "";

for (var p = 0; p < length; p++) {
    for (var q = 0; q < length; q++) {
        if ((p + q) % 2 == 0) board += " ";
        else board += "#";
    }
    board += "\n";
}

console.log(board);
