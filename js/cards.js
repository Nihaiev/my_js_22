/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);

// console.table(cards);

/*
 * Добавление (по индексу)
 */

// const cardToInsert = 'Карточка-6';
// const index = 3;

// // cards.splice(1, 0, 5, 10, 20) // добавляємо через splice з 3 елемента
// cards.splice(index, 0, cardToInsert);

// console.table(cards);

/*
 * Обновление (по индексу)
 */

const cardToUpdate = 'Карточка-4';

cards.splice(0, 1, cardToUpdate)
console.table(cards);