// в скобках обявляємо папаметри (буквальнозмінні функції. вони доступні тільки в тілі функції)

const add = function (x,y) {
    console.log(x);
    console.log(y);
console.log('Виконується функція add');
    // const result = x + y;
    // console.log('x+y: ', result);
    return x + y;
    
}

add(2, 3);// виклик функції (2.3 - передаємо аргументи, параметри x,y)
add(5, 15);
add(20, 5);

1336