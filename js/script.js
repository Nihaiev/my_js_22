// function multiply(x, y, z) {
// //   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

// //   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550


// function add(a, b, c) {
//   // Change code below this line
// return a * b * c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage (name, price) {
//   // Change code below this line
//    const message = ('You picked ${name}, price per item is ${price} credits') ;
//   // Change code above this line
//   return message;
// };

// тернарний оператор

// const isUser = true;
// // if () {
// //   else {
    
// //   }
// // }
// const result = isUser ? 'це користоувач': 'Це бот';
// isUser ?

// Область видимості
// є локальна і глобальна зона видимості
// let mane = 'Rob';
// if (true) {
//   name = 'Steve';
// } console.log(name);

// /*
// * цикл while
//   */

// let i = 0;
// while (i < 100) {
//   i += 1;
//   console.log(i);
// }
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const message = `You ordered droids worth ${pricePerDroid} credits. Delivery ${deliveryFee} credits is included in total price.`;


//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage);

/*
* Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.
*/

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost); // 500
