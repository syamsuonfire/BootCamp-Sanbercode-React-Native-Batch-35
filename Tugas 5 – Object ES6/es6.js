// -------------------SOAL ES 6 NO.1-------------------

// 1. Mengubah fungsi menjadi fungsi arrow
const golden = function goldenFunction() {
    console.log("this is golden!!");
};
// JAWABAN SOAL NO.1
const goldenArrow = () => {
    console.log("this is golden!!");
};

golden();
goldenArrow();

// -------------------SOAL ES 6 NO. 2-------------------
// 2. Sederhanakan menjadi Shorthand Object literal di ES6

const newFunction = function literal(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(firstName + " " + lastName);
            return;
        },
    };
};

const newFunction2 = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: () => {
            console.log(firstName + " " + lastName);
            return;
        },
    };
};

//Driver Code
const person = newFunction("William", "Imoh");
const person2 = newFunction2("William", "Imoh");
console.log(person);
person.fullName();

//Output
// {
//   firstName: 'William',
//   lastName: 'Imoh',
//   fullName: [Function: fullName]
// }
// William Imoh

//

// -------------------SOAL ES 6 NO. 3-------------------
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!",
};

// ES 5
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

const { firstName, lastName, destination, occupation } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

// -------------------SOAL ES 6 NO. 4-------------------

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
// ES 5
// const combined = west.concat(east);
// ES 6
const combined = [...west, ...east];
//Driver Code
console.log(combined);

// -------------------SOAL ES 6 NO. 5-------------------

const planet = "earth";
const view = "glass";

// ES 5
// var before =
//     "Lorem " +
//     view +
//     " dolor sit amet, " +
//     "consectetur adipiscing elit, " +
//     planet +
//     " do eiusmod tempor " +
//     "incididunt ut labore et dolore magna aliqua. Ut enim" +
//     " ad minim veniam";

// ES 6
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

// Driver Code
console.log(before);
