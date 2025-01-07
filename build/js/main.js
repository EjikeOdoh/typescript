"use strict";
let stringArr = ["One", "Hi", "Helo"];
let guitars = ["Bass", "Tenor", 1209];
let mixedData = ["Tesla", 1232, true];
stringArr[0] = "Hi";
stringArr.push("68");
guitars[0] = "Hello";
guitars.unshift(1001);
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Westlife");
let myTuple;
myTuple = ["Emma", 23, true];
bands[3] = "Hello";
let myObj;
myObj = [];
let exampleObj = {
    prop1: "Hello",
    prop2: true
};
exampleObj.prop2 = false;
// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1144]
};
let jp = {
    name: 'Jimmy',
    albums: ["I", "IV"]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLowerCase()}`;
    }
    return 'Hello';
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
    Grade[Grade["F"] = 6] = "F";
})(Grade || (Grade = {}));
console.log(Grade[1]);
