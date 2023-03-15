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


