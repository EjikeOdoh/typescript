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
console.log(Dave.getAge());
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
console.log(dev.getLang());
