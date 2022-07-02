// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (let i = 0; i < friends.length; i += 1){
//     friends[i] += `-${i}`;

// }

// console.table(friends);

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

/*
*Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
*firstTwoEls - масив із перших двох елементів
*nonExtremeEls - масив з усіх елементів, крім першого та останнього
*lastThreeEls - масив із трьох останніх елементів
*/

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

// fruits.includes(fruit);

//   return fruit; // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

/*Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
*Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
*Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
*
*
*
*
*
*
*/

// function getCommonElements(array1, array2) {
//   const uniqieElements = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       uniqieElements.push(element);
//     }
//   }
//   return uniqieElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function calculateTotalPrice(order) {
//   let total = 0;

// for (const total of order) {
//     total += order;
// }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice());

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);