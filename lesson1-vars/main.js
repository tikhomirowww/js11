// нельзя
// let 2color = "red";
// let bg color = 'red'
// let bg-color
// let цвет = "синий"
// let cvet
// let cvet

// можно
// let bgColor
// let bg_color

// console.log(color2);
// let color = "red";
// // color = "green";

// const color2 = "blue";
// // color2 = "green";
// // console.log(color2);

// var color3 = "yellow";
// console.log(color3);

// Data types
let color = "red"; //string
let num = 5.8; //number
// let isAdmin = true // boolean
let isAdmin = false; // boolean
let money = undefined; //undefined
let cell = null; //null
let BIG_NUMBER = 234567890n; //BigInt
let nameSymbol = Symbol("hello"); //Symbol

let person = {
  name: "Sam",
  job: "Frontender",
  age: 20,
};

let pet = {
  name: "Bobik",
  age: 7,
  color: "brown",
  goodBoy: false,
  owner: person,
};

// console.log(pet.owner.job);
//             0      1     2    3        4         5
let array = ["hello", 52, true, false, undefined, person];
// console.log(array[3]);
// console.log(array[array.length - 1]);
let name = "Ilia";
// console.log(name[1]);

// let array = {0: 'hello', 1: 52}

// Arithmetic operations

// console.log("1" + "1");

const num1 = 50;
const num2 = 4;
const sum = num1 + num2;
const dif = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const exp = num1 ** num2;
const prc = num1 % num2;
console.log(sum, dif, mult, div, exp, prc);
