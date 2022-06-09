// Soal No. 1 Animal Class

// Release 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("Shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

// Release 1
class Frog extends Animal {
    constructor(name, noise) {
        super(name);
        this.sound = noise;
        this.legs = 4;
    }
    jump() {
        return (
            this.name +
            " has " +
            this.legs +
            " legs and " +
            this.name +
            " sounds like " +
            this.sound
        );
    }
}

class Ape extends Animal {
    constructor(name, noise) {
        super(name);
        this.sound = noise;
        this.legs = 2;
    }
    yell() {
        return (
            this.name +
            " has " +
            this.legs +
            " legs and " +
            this.name +
            " sounds like " +
            this.sound
        );
    }
}

var kodok = new Frog("Buduk", "hop hop");
console.log(kodok.jump()); // "hop hop"

var sungokong = new Ape("Kera sakti", "Auooo");
console.log(sungokong.yell()); // "Auooo"

// Soal No. 2 Function to Class

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
