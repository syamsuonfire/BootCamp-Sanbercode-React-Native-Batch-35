/**
 * Soal No. 1 (Membuat kalimat)
 */
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

/**
 * Jawaban Soal 1
 */
console.log(
    `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`
);

/**
 * Soal No.2 Mengurai kalimat (Akses karakter dalam string)
 */
var sentence = "I am going to be React Native Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord =
    sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord =
    sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord =
    sentence[23] +
    sentence[24] +
    sentence[25] +
    sentence[26] +
    sentence[27] +
    sentence[28]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord =
    sentence[30] +
    sentence[31] +
    sentence[32] +
    sentence[33] +
    sentence[34] +
    sentence[35] +
    sentence[36] +
    sentence[37] +
    sentence[38]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

/**
 * Jawaban Soal 2
 */
console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

/**
 * Soal No. 3 Mengurai Kalimat (Substring)
 */
var sentence2 = "wow JavaScript is so cool";

console.log("Jawaban Soal 3");

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 40);

/**
 * Jawaban Soal 3
 */
console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

/**
 * Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
 */
var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14); // do your own!
var thirdWord3 = sentence3.substring(15, 17); // do your own!
var fourthWord3 = sentence3.substring(18, 20); // do your own!
var fifthWord3 = sentence3.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

/**
 * Jawaban Soal 4
 */
console.log(
    "First Word: " + exampleFirstWord3 + ", with length: " + firstWordLength
);
console.log(
    "Second Word: " + secondWord3 + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log(
    "Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength
);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);
