type One = string
type Two = string|number
type Three = 'hello'

// let a:One = 'hello'
// let b = a as Two
// let c = a as Three


let a = <One>"world"

function addOrConcat(a:number, b:number, c: 'add' | "concat"): string | number {
    if (c === "add") {
        return a+b
    }
    return ""+a+b
}

let myVal:string = addOrConcat(2,4,'concat') as string
let nextVal:number = addOrConcat(2,4,'concat') as number

console.log(nextVal)

// The DOM

const img = document.querySelector('img')! 
const myImg = document.getElementById('img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('img')

img.src
myImg.src
