/*
* скрипт обробки покупки в магазині
* баланс зберігається в змінній balance
*сума покупки в payment
* перед перевіркою вивести повідомлення: загальна сума замовлення, вартість...
*/

let balance = 10000;
const payment = 2000;
console.log(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо рахунок`,);

if (payment <= balance ) {
    console.log('ok');
    balance -= payment;
    //balance=balance-payment;
    console.log(`На рахунку ${balance} кредитів`);  
} else {
    console.log('На рахунку не достатньо коштів');
}
console.log('Операція завершена');