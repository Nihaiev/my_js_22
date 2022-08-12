// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);
// const lastIndex = friends.length - 1;

// // for (let i = 0; i <= friends.length - 1; i += 1){
// //     console.log(friends[i]);
    
// // }

// for (const friend of friends) {
//     console.log(friend);
// }


/**
 * Порахувати загальну сумму
 */



/**
 * Скрипт пошуку логінів
 * 
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i+=1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = 'Користувача ${loginToFind} знайдено';
//         break;
//     }
//     message = 'Користувача ${loginToFind} не знайдено';
// }
// console.log(message);


/**
 * Скрипт пошуку самого малого числа в масиві
 * при умові що числа унікальні (не повторюються)
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19]

// let smallerNumber = numbers[0];

// for (const number of numbers) {
   
//     if (number < smallerNumber) {
//         smallerNumber = number;
//     }
// }
//  console.log('smallerNumber:', smallerNumber);


/**
 * Напиши скрипт який обєднує всі елементи масиву в оне строкове значення
 * в Елементі може бути будь яка кількість
 * Елементи в масиву в рядку повинні будти розділлені комою
 *  - Спочатку через for
 *  - Потім через join
 */


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // let string = '';
// // for (const friend of friends) {
// //     string += friend +',';
// // }
// // string = string.slice(0, string.length - 1)
// const string = friends.join(',')

// console.log(string);

/**
 * Напиши скрипт який замінює регістр символа в рядку на протилежний 
 * 
 */

// const string = 'JavaScript';
// const letters = string.split(''); // розбили посимвольно в масив
// let invertedString = '';

// // console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Цей символ у нижньому регістрі! - ', letter);
//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     invertedString += letter.toLowerCase();
//     // }
//     invertedString +=letter === letter.toLowerCase() ? letter.toUpperCase():letter.toLowerCase(); // те ж саме через тернарний}

// console.log(invertedString);



/**
 * Напиши скрипт який рахує суму елементів двух масивів
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2); // зробили один масив

// тепер цей масив перебиремо 
for (const number of numbers) {
    total += number;
}
console.log(total);
    
