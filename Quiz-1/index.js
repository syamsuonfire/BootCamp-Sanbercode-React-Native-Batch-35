// Jawaban Soal No. 1

function replaceCharacter(sentence, char1, char2) {
    if (!char2) {
        var x = sentence.split(char1);
        var y = x.join("");
        return y;
    } else {
        var x1 = sentence.split(char1);
        var y1 = x1.join(char2);
        return y1;
    }
}

// Test Case 1
var sentence = "Pada Hari Minggu ku turut ayah ke kota";

var result = replaceCharacter(sentence, "a", "o");
console.log(result); //Podo Hori Minggu ku turut oyoh ke koto

// Test Case 2
var sentence = "Naik delman istimewa ku duduk di muka";

var result = replaceCharacter(sentence, "a");
console.log(result); //Nik delmn istimew ku duduk di muk

// Jawaban Soal No. 2

function sortGrade(studentData) {
    studentData.sort(function (val1, val2) {
        var gradeResult = val2[2] - val1[2];

        if (gradeResult == 0) {
            return val1[0] - val2[0];
        }
        return gradeResult;
    });
    return studentData;
}

// Format Data [absen, nama, nilai]
var studentData = [
    [2, "John Duro", 60],
    [4, "Robin Ackerman", 100],
    [1, "Jaeger Marimo", 60],
    [6, "Zoro", 80],
    [5, "Zenitsu", 80],
    [3, "Patrick Zala", 90],
];

var sortedData = sortGrade(studentData);
console.log(sortedData);
