// const arr = [1, 2, 5, 3, 9, 6];
// const num = 8;

// arr.forEach(function (item, idx, arr) {
//   arr[idx] = item * num;
// });

// console.log(arr);
// _______________________________________________________________________
// const arr = [
//   { name: 'Sv', age: 36 },
//   { name: 'Alex', age: 29 },
//   { name: 'Brokk', age: 4 },
// ];

// const result = arr.every(
//   (user) => user.age >= 18
// );
// console.log(result);
// _______________________________________________________________________________

// const numbers = [
//   2, 78, 43, 56, 77, 11, 31, 12,
// ];

// const result = [...numbers].sort(
//   (a, b) => a - b
// );

// console.log('sort:', result);
// console.log('numbers:', numbers);
// __________________________________________________________________________

// reduce

// const str = [
//   's',
//   'a',
//   'f',
//   'B',
//   'A',
//   'S',
// ];
// const result = str.reduce(
//   (acc, item, idx, arr) => {
//     console.log('acc:', acc);
//     console.log('item:', item);
//     console.log(
//       '_____________________________________'
//     );
//     return acc + item;
//   }
// );
// ________________________________________________________________________

const cars = [
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 3160,
    onSale: false,
  },
  {
    make: 'Jeep',
    model: 'Renegade',
    type: 'suv',
    amount: 9,
    price: 42500,
    onSale: false,
  },
  {
    make: 'Saab',
    model: '9-3',
    type: 'sedan',
    amount: 8,
    price: 39700,
    onSale: true,
  },
];

// const getCarsWithType = (cars, type) =>
//   cars.filter(
//     ({ type: carType }) =>
//       carType === type
//   );

// console.table(
//   getCarsWithType(cars, 'suv')
// );
// console.table(
//   getCarsWithType(cars, 'sedan')
// );

// const getCarByModel = (cars, model) =>
//   cars.find(
//     ({ model: carModel }) =>
//       model === carModel
//   );

// console.log(
//   getCarByModel(cars, 'Renegade')
// );
// console.log(getCarByModel(cars, '9-3'));

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort(
//     (a, b) => a.price - b.price
//   );

// console.table(
//   sortByAscendingAmount(cars)
// );
// console.table(cars);

// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return [...cars].sort((a, b) =>
//       a.model.localeCompare(b.model)
//     );
//   } else {
//     return [...cars].sort((a, b) =>
//       b.model.localeCompare(a.model)
//     );
//   }
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(
//   sortByModel(cars, 'desc')
// );

// const getTotalAmount = (cars) =>
//   cars.reduce(
//     (acc, { amount }) => acc + amount,
//     0
//   );

// console.log(getTotalAmount(cars));

// const getModelsOnSale = (cars) =>
//   cars
//     .filter(({ onSale }) => onSale)
//     .map(
//       ({ make, model }) =>
//         `${make}, ${model}`
//     );

// console.log(getModelsOnSale(cars));
// ___________________________________________________________________

// const str =
//   'ghhhaijepfoghoihjraaaaahjldleuoknl';

// const result = str
//   .split('')
//   .reduce((acc, item) => {
//     acc.hasOwnProperty(item)
//       ? (acc[item] += 1)
//       : (acc[item] = 1);

//     return acc;
//   }, {});

// console.log(result);
// _________________________________________________________________________
// замикання..................

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(43));

// console.log(addTen(20));
// console.log(addTen(32));
// ________________________________________________________________________

// const getMessage = (text, name) =>
//   `${text}, ${name}, я тебе люблю`;

// console.log(
//   getMessage('мій коханй', 'Олексій')
// );
// console.log(
//   getMessage('коник', 'бетмен')
// );

// function getMessage(text, name) {
//   console.log(`${text}, ${name}!`);
// }
// setTimeout(
//   getMessage,
//   4000,
//   'мій коханй',
//   'Олексій'
// );
// __________________________________________________________________________

// const myArr = [3, 5, 6, 7, 45, 5, 32];

// let value;

// value = myArr.length;
// myArr[4] = 4;

// value = myArr.indexOf(5);
// value = myArr.push(100);

// console.log(value, myArr);
// ___________________________________________________________________

// 10/48

// const calculateTotalPrice = (
//   orderedItems
// ) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item, i) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// _______________________________________________________________________________

// 11/48

// const filterArray = (
//   numbers,
//   value
// ) => {
//   const filteredNumbers = [];

//   numbers.forEach((number, index) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };
// ____________________________________________________________________________

// 12/48

// const getCommonElements = (
//   firstArray,
//   secondArray
// ) => {
//   const commonElements = [];

//   firstArray.forEach((element, idx) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };
// _______________________________________________________________________

// 13/48

// const changeEven = (numbers, value) => {
//   const newNumbers = [];

//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newNumbers.push(element + value);
//     } else {
//       newNumbers.push(element);
//     }
//   });
//   return newNumbers;
// };
// _______________________________________________________________________________

// 14/48

// const planets = [
//   'Earth',
//   'Mars',
//   'Venus',
//   'Jupiter',
// ];

// const planetsLengths = planets.map(
//   (planet) => planet.length
// );

// console.log(planetsLengths);
// ______________________________________________________________________________
