
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name: string,
    active: boolean,
    albums: stringOrNumberArray
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
logMsg(add(2,3))