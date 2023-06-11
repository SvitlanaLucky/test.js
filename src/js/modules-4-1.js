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

// const doubledNums = numbers.map(function (number) {
//     console.log(number);

//     return number * 2;
// });

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);
// __________________________________________________________________________________
