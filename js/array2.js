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

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

console.log(nonExtremeEls);