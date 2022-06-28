/*
* Порахувати загальну сумму покупок в корзині
*/

// Коли ми бачимо масив, скоріш за все його треба перебрати по елементно
// Щоб отримати доступ до кожного елементу в масиві - потрбіно його перебрати в циклі

// 2.Зробити змінну total до циклу 
// 3.На кожній ітерації кожен елемент приплюсувати до  total 

const cart = [54, 28, 105, 70, 92, 17, 120, 54, 28, 105, 70, 92, 17, 120];
let total = 0;
// 1.Перебрати масив (на кожній ітерації ми зможемо отримати доступ до елементу масиву)
// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);
//     total += cart[i];
// }
// замість цього for ми можемо використовувати for of

for (const value of cart) {
    total += value;
}

console.log('Total:', total);

/*
* Ми написали скрипт де можемо взяти будь який масив (хоть міліард робітників ) і зробити загальну суму їх зарплати, що дозволяє робити цикли, робити довільну кількість повторень і обробляти динамічну довжину масиву 
*/

// добавить такс

// for (let i = 0; i < cart.length; i += 1){
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);