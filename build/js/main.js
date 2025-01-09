"use strict";
let jp = {
    name: "Jimmy",
    active: true,
    albums: [122, "Hi"]
};
let userName;
userName = "K";
console.log(userName);
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg(23);
logMsg(add(2, 3));
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(3, 4));
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2, 3));
const sumAll = (a = 5, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 2));
// Rest Parameters
const total = (...nums) => {
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
};
logMsg(total(1, 2, 3));
// Never type
const createError = (msg) => {
    throw new Error(msg);
};
let infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
function isNumber(value) {
    return typeof value === 'number'
        ? true : false;
}
// Use of never type
function printType(value) {
    if (typeof value === "string")
        return 'String';
    if (isNumber(value))
        return 'Number';
    return createError('This should never happen');
}
logMsg(isNumber('2'));
logMsg(printType('two'));
