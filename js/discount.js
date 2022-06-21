/*
* Скрипт підрахунку суми покупки зі знижкою в залежності від потраченої суми за весь час
* загальна потрачена сума зберігається в змінній totalSpent 
* сума платежу заберігається в змінній payment
* знижка зберігається в змінній discount
*
* - Якщо витрачено від [100 до 1000) – бронзовий партнер, знижка 2%
* - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
* - Якщо витрачено більше [5000 – золотий партнер, знижка 10%
* - Якщо витрачено менше 100) - не партнер, знижка 0%
*
* - В результаті вивести повідомлення
* «Оформляємо замовлення на суму [сума] зі знижкою [знижка]%»
*/

// const totalSpent = 50;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent <= 1000) {
//     console.log('бронзовий партнер, знижка 2%');

//     discount = 0.02; // 2% це 0,02
// } else if (totalSpent >= 1000 && totalSpent <= 5000) {
//     console.log('срібний партнер, знижка 5%');

//     discount = 0.05;
// } else if {
//         console.log('золотий партнер, знижка 10%');

//     discount = 0.1;
// } else {
//     console.log('не партнер, знижка 0%');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Оформляємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Загальна сума: ${totalSpent}`);


let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнер, скидка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Серебрянный партнер, скидка 5%');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('Золотой партнер, скидка 10%');
  discount = 0.1;
} else {
  console.log('Не партнёр, скидка 0%');
}

payment -= payment * discount;
// payment = payment - payment * discount;

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
);

totalSpent += payment;

console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);