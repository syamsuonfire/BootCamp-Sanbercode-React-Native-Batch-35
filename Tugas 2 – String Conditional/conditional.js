// Soal No. 1 If Else
var nama = "Jhon";
var peran = "Guard";

// Jawaban Soal 1
console.log("Untuk memulai game ini, kamu harus mengisi nama dan peran");
console.log("Nama kamu? ");

console.log("Pilih peranmu untuk memulai game ");

var hasil;

var pembuka = "Selamat datang di Dunia Werewolf";

if ((nama == "") & (peran == "")) {
    hasil = "Nama harus diisi!";
    console.log(hasil);
} else if (nama != "") {
    if (peran == "") {
        hasil = "Halo " + nama + ", Pilih peranmu untuk memulai game!";
        console.log(hasil);
    } else if (peran == "Penyihir" || peran == "penyihir") {
        hasil = `Hallo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi Werewolf!`;
        console.log(`${pembuka}, ${nama}!`);
        console.log(hasil);
    } else if (peran == "Guard" || peran == "guard") {
        hasil = `Hallo Werewolf ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`;
        console.log(`${pembuka}, ${nama}!`);
        console.log(hasil);
    } else if (peran == "Werewolf" || peran == "werewolf") {
        hasil = `Hallo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`;
        console.log(`${pembuka}, ${nama}!`);
        console.log(hasil);
    } else {
        hasil = "Engga ada peran yang kamu pilih";
        console.log(hasil);
    }
}

// Soal No. 2 Switch Case

var tanggal = 21;
var bulan = 1;
var tahun = 1945;
var output = "";

/*
 * Jawaban Soal 2
 */

switch (tanggal) {
    case 21: {
        output += 21;
        break;
    }
    case 22: {
        output += 22;
        break;
    }
    case 23: {
        output += 23;
        break;
    }
    case 24: {
        output += 24;
        break;
    }
    default: {
        break;
    }
}

switch (bulan) {
    case 1: {
        output += " Januari";
        break;
    }
    case 2: {
        output += " Februari";
        break;
    }
    case 3: {
        output += " Maret";
        break;
    }
    case 4: {
        output += " April";
        ``;
        break;
    }
    default: {
        break;
    }
}

switch (tahun) {
    case 1945: {
        output += " 1945";
        break;
    }
    case 1946: {
        output += " 1946";
        break;
    }
    case 1947: {
        output += " 1947";
        break;
    }
    case 1948: {
        output += " 1948";
        break;
    }
    default: {
        break;
    }
}

console.log(output);
