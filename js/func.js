// в скобках обявляємо папаметри (буквальнозмінні функції. вони доступні тільки в тілі функції)

const add = function (x,y) {
    console.log(x);
    console.log(y);
console.log('Виконується функція add');
    // const result = x + y;
    // console.log('x+y: ', result);
    return x + y; // повернення результату з функції 
    
}

// add(2, 3);// виклик функції (2.3 - передаємо аргументи, параметри x,y)
// add(5, 15);
// add(20, 5);

const r1 = add(5, 3);
console.log('r1: ', r1);

const r2 = add(10, 15);
console.log('r2: ', r2);

const r3 = add(30, 50);
console.log('r3: ', r3);

