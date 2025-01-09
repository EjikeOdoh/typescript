
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name: string,
    active: boolean,
    albums: stringOrNumber[]
}

let jp: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: [122, "Hi"]
}


let userName: 'E' | 'J' | 'K'

userName = "K"

console.log(userName)

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (msg: any): void => {
    console.log(msg)
}

logMsg(23)
logMsg(add(2, 3))

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (a, b) {
    return a * b
}

logMsg(multiply(3, 4))

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {

        return a + b + c
    }
    return a + b
}

logMsg(addAll(1, 2, 3))

const sumAll = (a: number = 5, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(sumAll(undefined, 2))

// Rest Parameters

const total = (...nums: number[]): number => {
    let sum: number = 0
    nums.forEach(element => {
        sum += element
    });
    return sum
}


logMsg(total(1, 2, 3))


// Never type
const createError = (msg: string) => {
    throw new Error(msg)
}

let infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}


// custom type guard
function isNumber (value: any):boolean {
return typeof value === 'number' 
    ? true : false
}

// Use of never type
function printType(value: number | string): string {
    if (typeof value === "string") return 'String'
    if (isNumber(value)) return 'Number'
    return createError('This should never happen')
}

logMsg(isNumber('2'))
logMsg(printType('two'))

