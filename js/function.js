// const numbers = [1, 2, 3]

// function foo(arr) {
//     const copy = arr.slice()
//     console.log('copy =>', copy)
//     console.log('copy === numbers', copy == numbers)
//     copy[0] = 22
//     console.log('numbers =>', numbers)
// }

// foo(numbers);

/*
* Example 1
* Скрипт розрахунку маси тіла 
*/
function calcBMI(weight, height) {
    //1. Замінити кому на крапку
    // 2. Привести до числа 
    // 3.
    // 4.Ділити
    const parsedWeight = weight.replace(',', '.');
    const parsedHeight = height.replace(',', '.');
    const weightNum = Number(parsedWeight);
    const heightNum = Number(parsedHeight);


    console.log('weightNum', weightNum);
    console.log('heightNum', heightNum);
    // робимо перевірку
    if (isNaN(weightNum) || isNaN(heightNum))  return 0 

    const calc = (weightNum / Math.pow(heightNum, 2)).toFixed;
    console.log('calc =>', calc);
    return Number(calc);
}

const bmi = calcBMI('88,3', '1.75');
console.log('bmi =>', bmi);
