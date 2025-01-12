"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return "I am " + this.age + " years old";
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
// console.log(Dave.getAge())
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return "I write " + this.lang;
    }
}
const dev = new WebDev('Lenovo', "Ejike", "Lucie", 30);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return this.name + " " + action + " the " + this.instrument;
    }
}
const jimmy = new Guitarist("Jimmy", "Guiter");
// console.log(jimmy.play("strums"))
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
