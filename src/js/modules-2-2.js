// const add = function (a, b) {
//     console.log(a);
//     console.log(b);

//     const result = a + b;
//     console.log('a + b =', result);
//     console.log('виконується функція add');

//     return result;
// }

// add(5, 6);
// add(6, 7);

//------------------------------------------------------

// const fn = function () {
//     return 555;

//     console.log(1);
//     console.log(2);
//     console.log(3);

//     return 111;
// }

// console.log('результат функції:', fn());

//-------------------------------------------------------------------------------

// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }

// console.log(calculateTotalPrice([56, 67, 34]));
// console.log(calculateTotalPrice([76, 4, 6, 8]));

//-------------------------------------------------------------------------------

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);

//----------------------------------------------------------------------------------

// const logins = ['poli', 'qwery', 'poly1scute'];

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of logins) {
//         if (login === loginToFind) {
//             return `Find ${loginToFind}`
//         }
//     }
//     return `Sorry, it doesn't find ${loginToFind}`;
// };

// console.log(findLogin(logins, 'asd'));
// console.log(findLogin(logins, 'qwe'));
// console.log(findLogin(logins, 'poly1scute'));

//--------------------------------------------------------------------------------

// const numbers = [5, 8, 4, 87, 45, 3];

// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// }

// console.log(findSmallestNumber([3, 6, 45, 32, 78, -4]));
// console.log(findSmallestNumber([43, 78, 54, 34, 21]));

//------------------------------------------------------------------------------------------

// const fn = function () {
//     console.log(arguments);


//     const args = Array.from(arguments);

//     for (const arg of arguments) {
//         console.log(arg);
//     }
// }

// const fn = function (a, ...args) {
//     console.log(`${a}`);
//     console.log(args);
// }

// fn('hello', 1, 2, 3);
// fn(6, 7, 8, 9);
// fn(4, 3, 5, 6, 7, 8,);

//---------------------------------------------------------------------------------------

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const calcBMI = function (weight, height) {
//     const weightNum = parseFloat(weight.replace(',', '.'));
//     const heightNum = parseFloat(height.replace(',', '.'));

//     return parseFloat((weightNum / Math.pow(heightNum, 2)).toFixed(1));
// }

// const bmi = calcBMI('54,3', '1.74');
// console.log(bmi);

//-----------------------------------------------------------------------------------------

// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//---------------------------------------------------------------------------------------------

// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     let sum = 0;

//     for (const num of arguments) {
//         sum += num;
//     }
//     return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//----------------------------------------------------------------------------------

// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minutes).padStart(2, 0);
    
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(61)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//--------------------------------------------------------------------------------------

// console.log(Number(null));
// console.log(3 > 2 > 1);
// console.log('5' + 5);
// console.log(Number('0'));
// console.log('5' - 5);
// console.log('5' - true);
// console.log(true && 0 && 'ожина');
// console.log('Ожина' || 'ожина');

//-------------------------------------------------------------------------------------------
//якщо а дорівніє 10, то - 'Good', в інших випадках - 'No'

// function fn(a) {
//     if (a === 10) {
//         return "Good";
//     }
//     return "No";
// }

// console.log(fn(10));

//--------------------------------------------------------------------------------------

// function fn(num) {
//        let result;
//     switch (num) {
//         case 1:
//             result = 'winter';
//             break;
//         case 2:
//             result = 'spring';
//             break;
//         case 3:
//             result = 'summer';
//             break;
//         default:
//             result = 'autumn';
//             break;
//     }
//     return result;
// }

// console.log(fn(2));

//---------------------------------------------------------------------------

// let counter = 0;

// while (counter <= 50) {
//     console.log(counter);
//     counter += 1;
// }

//---------------------------------------------------------------------------

// function question() {
//     const answer = prompt('what is the oficial name JS');
//     console.log(answer);
//     if (answer === 'ECMAScript') {
//         alert('Good');
//     } else {
//         alert ('No');
//     };
// };

// question();

//-------------------------------------------------------------------------------------------------

// function fn() {
//     const login = prompt('Введіть логін');

//     if (!login) {
//         alert('Back');
//         return;
//     }

//     if (login === 'Admin') {
//         const password = prompt('Введіть password');
//         if (password === 'I am boss') {
//             alert('Hello');
//         } else {
//             alert('Sorry');
//         }
//     } else {
//         alert('I do not no');
//     }
// }

// fn();

//------------------------------------------------------------------------------------------

// const styles = ['Jass', 'Blus'];
// styles.push('Rock-and-Roll');

// styles.splice(styles.indexOf('Blus'), 1, 'Clasic');

// styles.shift();

// styles.splice(0, 0, 'Regi', 'Rep');

// console.log(styles);

// styles.unshift('Ky');

// console.log(styles);

//-----------------------------------------------------------------------------------

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";

//     if (ADMIN_PASSWORD === password) {
//         return "Welcome!"
//     };

//     return "Access denied, wrong password!"
// };

// console.log(checkPassword("jquermyjam"));


// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


// function makeArray(firstArray, secondArray, maxLength) {
//     return firstArray.concat(secondArray).slice(0, maxLength);
// };

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     };
//     return total;
// };

// console.log(calculateTotal(7));


// function findLongestWord(string) {
//     let words = string.split(' ');
//     let maxWord = words[0];

//     for (const word of words) {
//         if (word.length > maxWord.length) {
//            maxWord = word;
//         };
//     };
//     return maxWord;
// };

// console.log(findLongestWord("Google do a roll"));
// ________________________________________________________________________________

// function foo() {
//     console.log(arguments);
// };

// foo(5, 'Mango', true);
// _____________________________________________________________

// let a = 10;

// function foo(a) {
//     a = 45;
// };

// foo();
// console.log(a);


// const test = [1, 2, 3];

// function foo(arr) {
//     arr.splice(0, 1);
// };

// foo(test);
// console.log(test);


// function createString(name, year) {
//     const result = add(year);

//     return `${name} years ${result}`;
// };

// console.log(createString('Mango', [1, 4, 6]));

// function add(arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum += num;
//     };
//     return sum;
// };
// ______________________________________________________________________

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return weight / Math.pow(height, 2);
//     return Number((weight / height ** 2).toFixed(1));
   
// };

// const bmi = calcBMI('72,8', ' 1.74');
// console.log(bmi);
// ______________________________________________________________________________

// function findLargestNumber() {
//     // const arr = Array.from(arguments);
//     const arr = [...arguments];
//     let max = arr[0];

//     for (const num of arr) {
//         if (num > max) {
//             max = num;
//         };
//     };

//     return max;
// };

// console.log(findLargestNumber(56, 78, 21, 43, 65, 99));
// console.log(findLargestNumber(76, 43, 45, 89, 44));
// ____________________________________________________________________________

// function calAverage() {
//     console.log(arguments);
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     };
//     return total / arguments.length;
// };

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));
// _______________________________________________________________________________

// function fornatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;

//     return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`;
// };

// console.log(fornatTime(70));
// console.log(fornatTime(450));
// console.log(fornatTime(1441));
// __________________________________________________________________________
















