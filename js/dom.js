// отримуємо посилання на кнопку 
const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]');

// console.dir(btnAdd.textContent);
// btnAdd.textContent = 'Текст на кнопке';

// вешаем слушатель собития на кнопку
btnAdd.addEventListener('click', function () {
    // пишемо код який буде виконуватись при кліканні 
    console.log(' click he-he-he');
    console.log(valueInput.value);// виводимо в консоль значення з input

    valueInput.value = ''; //очишуємо інпут після кліку 
} )


// const btnAdd = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.addEventListener('click', function () {
//   const value = Number(valueInput.value);

//   total += value;
//   outputEl.textContent = total;
//   valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//   total = 0;
//   outputEl.textContent = total;
// });