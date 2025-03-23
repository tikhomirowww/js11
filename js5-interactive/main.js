// let names = ["alvares", "jesika", "vasya"];
// console.log(names[2]);
let keyName = "name";

// let person = {
//   name: "Jesica",
//   pet: {
//     name: "Barsik",
//     age: 7,
//     hobby: ["tygydyk", "sleep", "eat"],
//   },
// };
// // console.log(person.pet.hobby[0]);
// console.log(person[keyName]);

// let array = ["hello", [{ name: "Meyman" }]];
// console.log(array[1][0].name);

// let companies = [
//   {
//     name: "Apple",
//     dist: [[{ countryName: "USA", ambasadors: ["Jack", ["John"]] }]],
//   },
// ];
// console.log(companies[0].dist[0][1[2[2[2[2[2[2]]]]]]];

// let obj = { name: "vasya" };
// let isAdmin = confirm("Ve admyn?");
// //s if (isAdmin === true) {
// //   obj.isAdmin = true;
// // }
// obj.isAdmin = isAdmin;
// console.log(obj);

let password = "qwrt123";
let isAdmin = confirm("isAdmin?");
if (isAdmin) {
  let answer = prompt("password");
  if (answer === password) {
    alert("welcome");
  } else alert("bye");
}
