"use strict";
// console.log("Hi")
//  Tuples 
let t1 = ["Arbaz", true, 24];
let t2 = ["Arbaz", 24, true];
let t3 = ["Arbaz", 24, true];
let student = {
    name: "Ejaz",
    id: 1,
    email: 'test@gmail.com'
};
var Score;
(function (Score) {
    Score[Score["A"] = 25] = "A";
    Score[Score["B"] = 26] = "B";
    Score[Score["C"] = 27] = "C";
    Score[Score["D"] = 28] = "D";
    Score[Score["E"] = 29] = "E";
})(Score || (Score = {}));
let student2 = {
    name: "Ejaz",
    id: true,
    email: '2' // try assigning a number or boolean to  throw an error
};
let user = {
    name: "Anmol",
    id: "5",
    email: 'test@gmail.com',
    role: 'qqq'
};
//  Functions
let add = (a, b) => {
    return a + b;
};
let sub = (a, b) => {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
//  console.log(sub(2,3))
// Void Return
let voidfn = (a) => {
    console.log(a);
};
// never return 
let Neverfn = (a) => {
    console.log(a);
    while (true) {
        console.log(a);
    }
};
