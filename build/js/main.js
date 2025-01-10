"use strict";
// let a:One = 'hello'
// let b = a as Two
// let c = a as Three
let a = "world";
function addOrConcat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
}
let myVal = addOrConcat(2, 4, 'concat');
let nextVal = addOrConcat(2, 4, 'concat');
console.log(nextVal);
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const nextImg = document.getElementById('img');
img.src;
myImg.src;
