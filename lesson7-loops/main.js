// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//! for
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let num = 10;
// num = num + 5;
// num += 5;
// num -= 5;
// console.log(num);

// num++; //increment
// num--; //decrement
// console.log(num);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//!while
// let i = 1;
// while (i >= 10) {
//   console.log(i);

//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i >= 2);

// while (true) {
//   const answer = +prompt("2 + 3");
//   if (answer === 5) {
//     alert("Molodets");
//     break;
//   }
// }

// for (let i = 0; true; i++) {
//   const answer = +prompt("2 + 3");
//   if (answer === 5) {
//     alert("Molodets");
//     break;
//   }
// }

// const friends = ["Vasya", "Petya", "Olya", "Zhanybek", "Harry", "Zhenya"];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
//   if (friends[i] === "Olya") break;
// }

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i] === "Zhanybek") continue;
//   console.log(friends[i]);
// }

// const friends = ["Vasya", "Petya", "Olya", "Zhanybek", "Harry", "Zhenya"];

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].length !== 5) continue;
//   console.log(friends[i]);
// }

// let i = 0;
// while (i < friends.length) {
//   console.log(friends[i]);
//   i++;
// }

// const users = [
//   {
//     name: "Vasya",
//     age: 15,
//   },
//   {
//     name: "Olya",
//     age: 45,
//   },
//   {
//     name: "Petya",
//     age: 25,
//   },
// ];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 20) {
//     console.log(users[i].name);
//   }
// }

// const friends = ["Vasya", "Petya", "Olya", "Zhanybek", "Harry", "Zhenya"];

// for (let i = 0; i < friends.length; i++) {
//   if (i === 3) continue;
//   console.log(friends[i]);
// }
// for (let elem of friends) {
//   console.log(elem);
// }

// const object = {
//   name: "Vasya",
//   age: 19,
//   job: "Frontender",
// };

// const key = "job";

// console.log(object[key]);

//object[name]
//object[age]

// for (let key in object) {
//   console.log(key, object.key);
// }

// const friends = ["Vasya", "Petya", "Olya", "Zhanybek", "Harry", "Zhenya"];

// for (let index in friends) {
//   console.log(friends[index]);
// }

// const users = [
//   {
//     name: "Vasya",
//     age: 15,
//   },
//   {
//     name: "Olya",
//     age: 45,
//   },
//   {
//     name: "Petya",
//     age: 25,
//   },
// ];

// for (let elem of users) {
//   console.log(elem);
//   if (elem.age >= 20) {
//     console.log(elem.name);
//   }
// }

// for (let i = 0; i < friends.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(friends[i]);
//   }
// }

// for (const index in friends) {
//   if (index % 2 !== 0) {
//     console.log(friends[index]);
//   }
// }

// console.log(window);

// for (let key in window) {
//   // console.log(key + ": " + window[key]);
//   console.log(`${key}: ${window[key]}`);
// }

// const friends = ["Vasya", "Petya", "Olya", "Zhanybek", "Harry", "Zhenya"];

// for (let friend of friends) {
//   // console.log(`Hello ${friend}`);
//   console.log("hello " + friend);
// }

// const object = {
//   name: "Vasya",
//   age: 19,
//   job: "Frontender",
// };

// for (let key of object) {
//   console.log(key);
// }
let arr = [];
for (let i = 0; i < 5; i++) {
  const answer = prompt("what lesson?");
  arr.push(answer);
  console.log(arr);
}
