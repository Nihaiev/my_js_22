// Приклад як працює return

// якщо ми не поставимо повернення з функції return, не повернемо якесь значення то ця функція на своє місце поверне значення undefined (значення для повернення не визначено)

const fn = function () {
    console.log(1);
    console.log(2);
    console.log(3);
    return 
}

console.log(fn());