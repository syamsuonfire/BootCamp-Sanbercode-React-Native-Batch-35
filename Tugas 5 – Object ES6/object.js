// -------------------SOAL OBJECT NO. 1-------------------

function arrayToObject(arr) {
    var now = new Date();
    var yearNow = now.getFullYear();
    var age = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i][3]) || arr[i][3] > yearNow) {
            age = "Invalid Year";
        } else {
            age = yearNow - arr[i][3];
        }
        var temp = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: yearNow - arr[i][3],
        };
        console.log(temp.firstName + " " + temp.lastName + ": ");
        console.log(temp);
    }
}

// Driver Code
var people = [
    ["Bruce", "Banner", "male", 1975],
    ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);
/*
{
  '1. Bruce Banner': { 
    firstName: 'Bruce', 
    lastName: 'Banner', 
    gender: 'male', 
    age: 45 
  },
  '2. Natasha Romanoff': {
    firstName: 'Natasha',
    lastName: 'Romanoff',
    gender: 'female',
    age: 'Invalid Birth Year'
  }
} 
*/

var people2 = [
    ["Tony", "Stark", "male", 1980],
    ["Pepper", "Pots", "female", 2050],
];
arrayToObject(people2);

/* 
{
  '1. Tony Stark': {
    firstName: 'Tony', 
    lastName: 'Stark', 
    gender: 'male', 
    age: 40 
  },
  '2. Pepper Pots': {
    firstName: 'Pepper',
    lastName: 'Pots',
    gender: 'female',
    age: 'Invalid Birth Year'
  }
} 
*/

// Error case
arrayToObject([]); // "{}"

// -------------------SOAL OBJECT NO. 2-------------------

function shoppingTime(memberId, money) {
    var stuff = [
        ["Sepatu Stacattu", 1500000],
        ["Baju Zoro", 500000],
        ["Baju H&N", 250000],
        ["Sweater Uniklooh", 175000],
        ["Casing Handphone", 50000],
    ];

    var output = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0,
    };

    if (!memberId && !money) {
        return "Mohon maaf, toko Hijau hanya berlaku untuk member saja";
    } else if (!memberId) {
        return "Mohon maaf, toko Hijau hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        for (var i = 0; i < stuff.length; i++) {
            if (money >= stuff[i][1]) {
                output.listPurchased.push(stuff[i][0]);
                money -= stuff[i][1];
                output.changeMoney = money;
            }
        }
        return output;
    }
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());

// -------------------SOAL OBJECT NO. 3-------------------
function naikAngkot(listPenumpang) {
    var rute = ["A", "B", "C", "D", "E", "F"];
    var price = [];

    for (var i = 0; i < listPenumpang.length; i++) {
        var start = rute.indexOf(listPenumpang[i][1]);
        var finish = rute.indexOf(listPenumpang[i][2]);
        var output = {
            penumpang: listPenumpang[i][0],
            naikDari: listPenumpang[i][1],
            tujuanAkhir: listPenumpang[i][2],
            bayar: (finish - start) * 2000,
        };
        price.push(output);
    }
    return price;
}

//TEST CASE
console.log(
    naikAngkot([
        ["Dimitri", "B", "F"],
        ["Icha", "A", "B"],
    ])
);
