/*
* пишемо скрипт який підсчитує суму всіх парних чисел в масивы
*/



// 4. якщо парне + до тотал 

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// 1. змінна тотал
let total = 0;

// 2. перебрати масив
// for (let i = 0; i < numbers.length; i += 1){
//     const number = numbers[i];
//     console.log(number);
//     // 3. на кожній ітерації перевірити елемент на парність
// if (number % 2 === 0) {
//     console.log('Парне!');
//     // 4. якщо парне + до тотал
//     total += number;
// }
// }


// for of без ітератора і без запису в комірку памяті (for of зручний і швидкий)
for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
    console.log('Парне!');
    // 4. якщо парне + до тотал 
    total += number;
}
}

console.log('Тотал:', total);
