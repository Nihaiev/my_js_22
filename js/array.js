// Масив

// const =[]; - просто змінній ставимо квадратні дужки, це називається літерал масиву

// const friends =['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// // const LastIndex = friends.length - 1; //виразовуємо останній індекс масиву (масив буде динамічний)
// friends[1] = 'qwerty'; // достукались до 1 значення масиву( починається з 0) і міняємо в памяті кусок масиву
// // console.log(LastIndex);
// console.table(friends);

// Передача по посиланню і по значенню

const a = [1, 2, 3];
const b = a;
console.log('a', a);
console.log('b', b);

a[0] = 500;

console.log('a', b);
console.log('b', b);
