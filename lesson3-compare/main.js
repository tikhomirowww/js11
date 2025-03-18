//! compare

// let num1 = 8;
// let num2 = +"8";

// let num3 = num1.toString();
// let num4 = Number(num2); // или то же самое делает знак +

// // console.log(typeof num2);
// console.log(typeof num3, typeof num4);

// >
// console.log(num1 > num2); //false

// <
// console.log(num1 < num2); //true

// console.log(num1 >= num2);
// console.log(num1 <= num2);

// console.log((num1 = num2)); // нельзя так сравнивать, это присваивание
// console.log(num1 == num2); // нестрогое равно (смотрит на значения)
// console.log(num1 === num2); // строгое равно, смотрит еще и на тип данных

// let num1 = 8;
// let num2 = "8";

// console.log(num1 !== num2);
// console.log(!!true);

//! Boolean
// оператор Boolean переводит в булевое значение, то же самое делает !!
// console.log(Boolean("hello")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true

// console.log(Boolean(28)); //true
// console.log(Boolean(-28)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean({})); //true
// console.log(Boolean([])); //true

// console.log(Boolean(undefined));
// console.log(Boolean(null));

//! Logic operators

// && || !
// && ищет false значения
// console.log(false && true && true);

// || ищет тру значения
// console.log(false || false || true);

// console.log(Boolean("") && 0 && undefined); // возвращает первое false значение
// console.log("hello" && [] && {}); //возвращает последний тру

// console.log("hello" || 12 || []); -> первое тру
// console.log(null || "" || 0); -> последний false

// console.log(true || (false && true));
// true || false;
// true;

// console.log(("hello" && false) || (null && true));
// false || null;
// null;

// console.log(!"" || (30 && "1" && 10 === 10) || !false);
// '' || 10 ===10 || false
// 10===10
// console.log(!20);

let str = "5.5fjh kd skcj";
// let num = +str;
// let num = Number(str);
// let num = parseInt(str);
let num = parseFloat(str);
console.log(num);
// NaN - не число
