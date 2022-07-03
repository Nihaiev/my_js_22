/* Стек викликів, механіз завдяки якому працюють функції в js
* - Stack trace
*
*
*
*/

const fnA = function () {
    console.log('Виконується функція А');
}

const fnB = function () {
    console.log('Виконується функція B');
}

const fnC = function () {
    console.log('Виконується функція C');
}
fnA();
fnB();
fnC();



