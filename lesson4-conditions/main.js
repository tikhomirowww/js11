// const age = +prompt("how old are you?");
// console.log(age);
//! if else
// if (age <= 0) {
//   alert("не балуйся");
// } else if (age < 10) {
//   alert("Маша и медведь");
// } else if (age >= 10 && age < 16) {
//   alert("Winx");
// } else if (age >= 16 && age < 25) {
//   alert("Berserk");
// } else {
//   alert("идите спать, пожалуйста)))");
// }

let num1 = 100;
let num2 = 100;

// if (num1 < num2) {
//   console.log(num1 + " меньше чем " + num2);
// } else if (num1 === num2) {
//   console.log(num1 + " равен " + num2);
// } else {
//   console.log(num1 + " больше чем " + num2);
// }

// if (num3 <= 0) {
//   alert("не балуйся");
// } else if (num3 === 1) {
//   alert("Понедельник");
// } else if (num3 === 2) {
//   alert("Вторник");
// } else if (num3 === 3) {
//   alert("Среда");
// } else if (num3 === 4) {
//   alert("Четверг");
// } else if (num3 === 5) {
//   alert("Пятница");
// } else if (num3 === 6) {
//   alert("Суббота");
// } else if (num3 === 7) {
//   alert("Воскресенье");
// } else {
//   alert("Сказано от 1 до 7");
// }

// let num = +prompt("У кажите число от 1 до 7");
// switch (num) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Incorrect value");
// }

let age = 2;
let canDrive = age >= 17 ? true : false;

// if (age >= 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }

// console.log(canDrive);

// 1. Используя условынй оператор switch определите тип данных переменной x. Результат выведите в консоли.
// let x = true;
// let x = { name: "Sam" };
// let x = 123;
// let x = "Hello World!";
// let x = [12, "str", false];

// switch (typeof x) {
//   case "number":
//     console.log("Значение имеет тим данных number");
//     break;
//   case "boolean":
//     console.log("Значение имеет тим данных boolean");
//     break;
//   case "object":
//     console.log("Значение имеет тим данных object");
//     break;
//   case "string":
//     console.log("Значение имеет тим данных string");
//     break;
// }

let isAdmin = confirm("вы админ?");
console.log(isAdmin);
let answer = isAdmin ? "Welcome" : "Uhodite";
console.log(answer);
