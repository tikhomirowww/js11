// const friends = ["Peter", "Harry", "John"];

let newFriend = "Vasya";

// let test = friends.push(newFriend); //? add element at end of the array

// console.log(friends, test);

// let test = friends.unshift("Vasya"); //? add element at start of array

// console.log(friends, test);

// let test = friends.pop(); //removes last element

// console.log(friends, test);

// let test = friends.shift(); //? removes first elem

// console.log(friends);

// const fruits = ["Apple", "banana", "peach", "watermelon"];

// let result = fruits.slice(1);
// console.log(result, fruits);

// const fruits = ["Apple", "banana", "peach", "watermelon"];

// let test = fruits.splice(1, 2, "orange", "pineapple");
// fruits.splice(1, 1);
// fruits.splice(1, 0, "pineapple");

// console.log(fruits, test);

// const fruits = ["Apple", "banana", "peach", "watermelon"];

// let joined = fruits.join(" - ");
// console.log(joined, fruits);
// const reversed = fruits.reverse();
// console.log(reversed, fruits);

// const word = "Watermelon";
// const splitted = word.split("");
// splitted.reverse();
// const joined = splitted.join("");

// console.log(joined);

// const test = "2025-03-25";
// const splitted = test.split("-");
// splitted.reverse();
// let joined = splitted.join(" ");
// const res = test.split("-").reverse().join(" ");
// console.log(res);

// const fruits = ["Apple", "banana", "peach", "watermelon"];

// const inc = fruits.includes("peach", 3);
// console.log(inc);

// const fruits = ["Apple", "banana", "peach", "watermelon"];

// const res = fruits.indexOf("peachfbdhskbhjfeklbv");
// console.log(res);

// 1. Запросить у пользователя 5 элементов и сохранить их в массив, использовать методы массивов++

// let answer = prompt("Укажите 5 элементов через ,");
// let arr = answer.split(",");
// console.log(arr);

const name = prompt("Player name");
const stamina = +prompt("Enter player stamina");
const power = +prompt("Enter player power");
const rating = +prompt("Enter player rating");

const player1 = {
  name,
  stamina,
  power,
  rating,
};

const name2 = prompt("Player2 name");
const stamina2 = +prompt("Enter player2 stamina");
const power2 = +prompt("Enter player2 power");
const rating2 = +prompt("Enter player2 rating");

const player2 = {
  name: name2,
  stamina: stamina2,
  power: power2,
  rating: rating2,
};

// console.log(player1);
const avr1 = (player1.power + player1.rating + player1.stamina) / 3;

const avr2 = (player2.power + player2.rating + player2.stamina) / 3;

const res = avr1 > avr2 ? "Player 1 wins" : "Player 2 wins";
alert(res);
