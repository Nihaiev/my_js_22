const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
for (let i = 0; i < friends.length; i += 1){
    friends[i] += `-${i}`;

}

console.table(friends);