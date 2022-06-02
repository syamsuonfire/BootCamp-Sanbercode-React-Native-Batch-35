/**
 * Soal No. 1 Function
 */
function teriak() {
    teriak = "Hallo Sanbers!";
    return teriak;
}

console.log(teriak());

/**
 * Soal No. 2 Function
 */

function kalikan(num1, num2) {
    return num1 * num2;
}

// with Arrow Function
const kalikan2 = (num1, num2) => num1 * num2;

var num1;
var num2;

num1 = 12;
num2 = 4;

var hasilKali = kalikan(num1, num2);

console.log(hasilKali);

/**
 * Soal No. 3 Function
 */

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

function introduce() {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
