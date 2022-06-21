// for (let i = 0; i < 100; i += 3){
//     console.log(i);

// }
// console.log('gdg');

/*
* Pre-increment and Post-increment
*/

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let a = 10;
// const b = ++a;
// console.log(a);
// console.log(b);
// це значить що значення змінної a буде збільшено уже після того як виконається "=" у змінній а у нас 11 тобто це преінкремент
// не використовувати ++ це зло

// Скрипт який підраховує загальну сумму зарплат робітників
// алгоритм:
// 1. робимо вари
// const minSalary = 500;
// const maxSalary = 5000;
// let employees = 5;
// let totalSalary = 0;
// // 2.перебрати праціників в циклі
// for (let i = 1; i <= employees; i += 1){
//     // 3. згерити випадкову зп
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//     console.log(`ЗП працівника ${i} - ${salary}`);
//     // 4. прибавити тотал
//     totalSalary += salary;
//     // 5.лог
//     console.log('totalSalary:', totalSalary);
// }

// Напиши скрипт який підрахує суму всіх парних чисел, які входять в діапазон
// 1.обявити змінні
const min = 1;
const max = 100 ;
let total = 0;


// 2.for от min до max з кроком в 1

for (let i = min; i <= max; i += 1){
    // console.log(i);
    // 3. проверяем остаток от деления
// console.log(5 % 3); залишок від ділення
    if (i % 2 !== 0) {
        console.log(`Не парне: `, i);
        continue;
    }
    console.log(`Парне: `, i);
        // 4. пишем суму 
        total += i;
}
console.log(`total: `, total);






