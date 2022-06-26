// Масив

// const =[]; - просто змінній ставимо квадратні дужки, це називається літерал масиву 

const friends =['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
// const LastIndex = friends.length - 1; //виразовуємо останній індекс масиву (масив буде динамічний)
friends[1] = 'qwerty'; // достукались до 1 значення масиву( починається з 0) і переоприділили його 
// console.log(LastIndex);
console.table(friends);