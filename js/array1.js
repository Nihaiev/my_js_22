//* Перебор масиву (ітерація)
// - for - якщо потрібен індекс або змінити елемент масиву
// - for...of - якщо індекс не потрібен і в масиві нічого міняти

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length - 1;

for (let i = 0; i <= lastIndex; i += 1) {
    // console.log(i);
    console.log(friends[i]); // звертання до кожного елементу масиву на ітерації 
}

//40:00