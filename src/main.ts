let stringArr = ["One", "Hi", "Helo"]

let guitars = ["Bass", "Tenor", 1209]

let mixedData = ["Tesla", 1232, true]

stringArr[0] = "Hi"
stringArr.push("68")

guitars[0] = "Hello"
guitars.unshift(1001)

mixedData = guitars

let test = []
let bands: string[] = [];

bands.push("Westlife")

let myTuple: [string, number, boolean]
myTuple = ["Emma", 23, true]

bands[3] = "Hello"

let myObj: object;
myObj = []

let exampleObj = {
    prop1: "Hello",
    prop2: true
}

exampleObj.prop2 = false;

type Guitarist = {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1144]
}

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ["I", "IV"]
}


const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLowerCase()}`
    }
    return 'Hello'
}

console.log(greetGuitarist(jp))

enum Grade {
    A = 1,
    B,
    C,
    D,
    E,
    F
}

console.log(Grade[1])