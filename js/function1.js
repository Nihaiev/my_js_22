// Example 2

function min(a, b) {
    // 1. перевірити а і б
    console.log('a', a, 'b', b)
    if (isNaN(a) || isNaN(b)) return 0 // 
    // if (a > b) return b
    // return a
    return Math.min(a,b)
    // 2.порівняти та повернути 
    // 
}

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Example 3

// Example 4

function calAverage() { 
    console.log('arguments', arguments)
    let sum = 0
    for (let argument of arguments) {
        console.log(argument)
        sum += argument
    }
    console.log('sum', SVGNumberList)
}

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

// Example 5

function formatTime(minutes) {
    // 1. скільки годин влазить у хвилини
    const  hours = Math.floor(minutes / 60)
    console.log('hours', hours)
    const min = minutes % 60
    console.log('min', min)

    return `${hours < 10 ? 0 : ''}${hours}:${min < 10 & 0:
 ''}${min}`
}
console.log(formatTime(70));
console.log(formatTime(450));
console.log(formatTime(1441));