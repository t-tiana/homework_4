'use strict';
// ДЗ:

//1. Знайдіть суму всіх цифр від 0 до 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i
}

alert(sum);

//2. Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

let array1 = [1, 2, 3, 4, 5]
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

let array2 = [-1, 22, 3, 44, 5]
let max = array2[0];

for (let i = 1; i < array2.length; i++) {
    if (array2[i] > max) {
        max = array2[i];
    }
}

alert(max);

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.
// Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера.

// arr для пуша отриманих даних
let countResultArrayPositiv = [];
let countResultArrayNegative = [];
let countResultArrayZeros = [];

// змінна для надання дозволу на аналіз
let startCount = true;

// 8 разів роблю запит
for (let i = 1; i <= 8; i++) {
    console.log(i, 'номер введеного числа');


// Виконую умову, якщо змінна true

    if (startCount === true) {
        // Питаю в юзера число
        const INPUTNUMBER = Number(prompt(`Enter a number ${i}/8`)).toFixed(2);
        const PARSE = parseInt(INPUTNUMBER);

        //отримане значення від юзера
        console.log(PARSE, 'введене число');

// перевіряю чи точно юзер дав число
        //PARSE === null
        if (PARSE === null
            || PARSE === undefined
            || Number.isNaN(PARSE)) {
            //змінна не ок, припиняю роботу
            startCount = false;
            console.log(startCount, 'чи вірно введено дані');
        } else {

            //це точно число, дозвіл отримано, далі виконую прорахунок
            startCount = true;
            console.log(startCount, 'чи вірно введено дані');

            //дізнаюся який знак має число від юзера
            const MATHSIGN = Math.sign(PARSE);

            //кидаю отримані значення у відповідні масиви
            switch (true) {
                case (MATHSIGN > 0) :
                    countResultArrayPositiv.push(MATHSIGN)
                    break;
                case (MATHSIGN === -1) :
                    countResultArrayNegative.push(MATHSIGN)
                    break;
                case (PARSE === 0) :
                    countResultArrayZeros.push(MATHSIGN)
                    break;
                default:
                    alert(`Something went wrong. Try again. Check if the input data is correct.`);
            }

        }
    }
}
if (startCount=== false){
    alert('Try again. Enter a number.');
}
//підраховую отримані дані
const POSITIVES = countResultArrayPositiv.length;
const NEGATIVES = countResultArrayNegative.length;
const ZEROS = countResultArrayZeros.length;

//Готово!
alert(`The amount of positives: ${POSITIVES}` + `\nThe amount of negatives: ${NEGATIVES}` + `\nThe amount of zeroes: ${ZEROS}`);

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

const MULTIPLYINDEX = 8;

for(let i = 1; i <= 9; i++) {
    let result = MULTIPLYINDEX * i;
    console.log(`8 * ${i} = ${result}`)
}

//6. Є масив з елементами 2, 5, 9, 15, 0, 4.
// За допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

let array3 = [2, 5, 9, 15, 0, 4];
let resultArray = [];
for (let i = 0; i < array3.length; i++ ){
    if(array3[i] > 3 && array3 [i] < 10){
       resultArray.push(array3[i])
    }
     resultArray.join();
}
alert(resultArray);

//7. Створити калькулятор який буде зациклений.
// Запитати у юзера 2 числа та знак , провести математичну операцію,
// далі вивести результат і спитатись чи хоче юзер повторити?

let result = 1;
while(result){
    const X = parseInt(prompt('Enter the first number'));
    const OPERATION = prompt('Select the operation:  +, -, *, or /');
    const Y = parseInt(prompt('Enter the second number'));
    const CALCSUM =  X + Y;
    const CALCMINUS = X - Y;
    const CALCMULTIPLY = X * Y;
    const CALCDIVIDE = X / Y;

    switch (OPERATION) {
        case '+': alert(CALCSUM);
            break;
        case '-': alert(CALCMINUS);
            break;
        case '*': alert(CALCMULTIPLY);
            break;
        case '/': alert(CALCDIVIDE);
            break;

        default:
            alert(`Something went wrong. Try again. Check if the input data is correct.`);
    }

    if (confirm('Continue?')) {}
    else{
        break
    }
}
