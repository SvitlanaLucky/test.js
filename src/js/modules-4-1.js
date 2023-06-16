// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback();
// };

// const fnB = function () {
//     console.log('exit fnB');
// };

// fnA('qweqwe', fnB);
// _____________________________________________________________________________

// const callback = function () {
//     console.log('after 2 minute');
// };

// setTimeout(callback, 2000);
// ________________________________________________________________________

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         const passed = test(el);
//         if (passed) {
//              console.log(filteredArray.push(el));
//         };
//     };
//     return filteredArray;
// };

// const callback1 = function (value) {
//     return value >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], callback1));
// console.log(filter([1, 2, 3, 4, 5,6,7,8]));

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true, },
//     { name: 'grapes', quantity: 150, isFresh: false, },
//     { name: 'bananas', quantity: 100, isFresh: true, },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// console.log(filter(fruits, getFruitsWithQuantity));
// _______________________________________________________________________________

// const add = (a, b) => {
//     console.log('qwe');
//     return a + b;
// };

// console.log(add(5, 6))
// ________________________________________________________________

// const message = add => `Hello ${add}`;

// console.log(message('Ann'));
// ______________________________________________________________________

// const message = addWords => `Hello my boyfriend ${addWords}`;

// console.log(message('Sv'));
// _________________________________________________________________

// const numbers = [5, 7, 9, 34, 56];

// const doubledNums = numbers.map(
//   function (number) {
//     console.log(number);

//     return number * 2;
//   });

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);
// ___________________________________________________________________________________

// const numbers = [5, 7, 8, 23, 45];

// const filteredNumbers = numbers.filter(
//   (number) => {
//     console.log(number);
//     return number >= 7;
//   }
// );

// console.log(filteredNumbers);
// __________________________________________________________________________

// const numbers = [89, 67, 34, 54, 76];

// const total = numbers.reduce(
//   (acc, number) => {
//     return acc + number;
//   },
//   0
// );

// console.log(total);
// ___________________________________________________________________________

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(
//   salary
// ).reduce((total, value) => {
//   return total + value;
// }, 0);

// console.log(totalSalary);
// _______________________________________________________________________________

// const add = [1, 2, 3, 4];
// const newAdd = [
//   {
//     name: 'Alex',
//     age: 28,
//   },
// ];

// console.log(add);
// console.log(newAdd);
// console.log(`hello`);

// console.log(`Hello Alex`);
// _________________________________________________________________________________

// const numbers = [1, 7, 45, 3, 89];
// const copy = [...numbers];

// console.log('numbers:', numbers);
// console.log('copy:', copy);

// copy.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// console.log(copy);

// copy.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });

// console.log(copy);
// console.log('numbers:', numbers);
// __________________________________________________________________________

// const array = [
//   1,
//   2,
//   [4, [5]],
//   [6, [7, 8, [9]]],
// ];
// console.log(array);
// console.log(array.flat(3));
// _________________________________________________________________

// const numbers = [1, 5, 3, 66, 45];

// const newNumber = numbers
//   .filter((num) => num > 10)
//   .map((num) => num * 3)
//   .sort((a, b) => b - a);

// console.log(newNumber);

// const greaterThenTwo = numbers.filter(
//   (num) => num > 10
// );
// console.log(greaterThenTwo);
// ________________________________________________________________________________

// const arr = [1, 2, 5, 3, 9, 6];

// const result = arr.map((item) => {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item;
// });

// console.log(result);
// ____________________________________________________________________
// const arr = [1, 2, 5, 3, 9, 6];

// function customMap(arr, callback) {
//   const result = [];
//   for (
//     let i = 0;
//     i < arr.length;
//     i += 1
//   ) {
//     const item = arr[i];
//     result.push(callback(item, i, arr));
//   }
//   return result;
// }

// console.log(customMap(arr, foo));

// function foo(item, idx, arr) {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item;
// }

// const result = arr.map((item) =>
//   (!(item % 2)) ? item * 2 : item
// );

// console.log(result);
// __________________________________________________________________

// const arr = [1, 2, 5, 3, 9, 6];

// function each(arr, callback) {
//   let total = arr[0];
//   for (
//     let i = 1;
//     i < arr.length;
//     i += 1
//   ) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, sum));
// console.log(each(arr, division));

// function add(first, second) {
//   return first + second;
// }

// function sum(first, second) {
//   return first * second;
// }

// function division(first, second) {
//   return first / second;
// }
// __________________________________________________________________________

// const arr = [1, 2, 5, 3, 9, 6];
// const num = 8;

// arr.forEach(function (item, idx, arr) {
//   arr[idx] = item * num;
// });

// console.log(arr);
// _______________________________________________________________________
