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
//  15/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title:
//       'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const titles = books.map(
//   (book) => book.title
// );

// console.log(titles);
// _____________________________________________________________________________
// 16/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(
//   (book) => book.genres
// );

// console.log(genres);
// __________________________________________________________________________
// 17/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     skills: [
//       'tempor',
//       'mollit',
//       'commodo',
//       'veniam',
//       'laborum',
//     ],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     skills: [
//       'nulla',
//       'anim',
//       'proident',
//       'ipsum',
//       'elit',
//     ],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     skills: [
//       'adipisicing',
//       'irure',
//       'velit',
//     ],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     skills: [
//       'lorem',
//       'veniam',
//       'culpa',
//     ],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = (users) => {
//   const newNames = users.map(
//     (user) => user.name
//   );

//   return newNames;
// };
// ________________________________________________________________________
// 18/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     skills: [
//       'tempor',
//       'mollit',
//       'commodo',
//       'veniam',
//       'laborum',
//     ],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     skills: [
//       'nulla',
//       'anim',
//       'proident',
//       'ipsum',
//       'elit',
//     ],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     skills: [
//       'adipisicing',
//       'irure',
//       'velit',
//     ],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     skills: [
//       'lorem',
//       'veniam',
//       'culpa',
//     ],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserEmails = (users) => {
//   const newEmails = users.map(
//     (user) => user.email
//   );

//   return newEmails;
// };
// _________________________________________________________________________

// 19/48

// const numbers = [
//   17, 24, 82, 61, 36, 18, 47, 52, 73,
// ];

// const evenNumbers = numbers.filter(
//   (number) => number % 2 === 0
// );
// const oddNumbers = numbers.filter(
//   (number) => number % 2 !== 0
// );

// console.log(evenNumbers);
// console.log(oddNumbers);
// ____________________________________________________________________________

// 20/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: [
//       'horror',
//       'mysticism',
//       'adventure',
//     ],
//   },
// ];

// const allGenres = books.flatMap(
//   (book) => book.genres
// );
// const uniqueGenres = allGenres.filter(
//   (genr, index, array) =>
//     array.indexOf(genr) === index
// );
// _____________________________________________________________________________
// 21/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title:
//       'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(
//   (book) => book.rating >= MIN_RATING
// );
// const booksByAuthor = books.filter(
//   (book) => book.author === AUTHOR
// );

// console.log(topRatedBooks);
// console.log(booksByAuthor);
// _________________________________________________________________________
// 22/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// function getUsersWithEyeColor(
//   users,
//   color
// ) {
//   const newUsers = users.filter(
//     (user) => user.eyeColor === color
//   );

//   return newUsers;
// }

// console.log(
//   getUsersWithEyeColor(users, 'blue')
// );
// ____________________________________________________________________________
// 23/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithAge = (
//   users,
//   minAge,
//   maxAge
// ) => {
//   const ageUsers = users.filter(
//     (user) =>
//       user.age > minAge &&
//       user.age < maxAge
//   );

//   return ageUsers;
// };

// console.log(
//   getUsersWithAge(users, 20, 30)
// );
// _______________________________________________________________________________

// 24/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (
//   users,
//   friendName
// ) => {
//   const newFriendName = users.filter(
//     (user) =>
//       user.friends.includes(friendName)
//   );

//   return newFriendName;
// };

// console.log(
//   getUsersWithFriend(
//     users,
//     'Briana Decker'
//   )
// );
// _____________________________________________________________________________________
// 25/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   const allFriends = users.flatMap(
//     (user) => user.friends
//   );

//   const uniqueFriends =
//     allFriends.filter(
//       (friend, index, array) =>
//         array.indexOf(friend) === index
//     );

//   return uniqueFriends;
// };

// console.log(getFriends(users));
// _______________________________________________________________________________
// 26/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getActiveUsers = (users) => {
//   return users.filter(
//     (user) => user.isActive === true
//   );
// };

// console.log(getActiveUsers(users));
// __________________________________________________________________________
// 27/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getInactiveUsers = (users) => {
//   return users.filter(
//     (user) => user.isActive === false
//   );
// };

// console.log(getInactiveUsers(users));
// _________________________________________________________________________________
// 28/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title:
//       'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
// ];

// const BOOK_TITLE =
//   'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(
//   (book) => book.title === BOOK_TITLE
// );
// const bookByAuthor = books.find(
//   (book) => book.author === AUTHOR
// );

// console.log(bookWithTitle);
// console.log(bookByAuthor);
// __________________________________________________________________________________
// 29/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getUserWithEmail = (
//   users,
//   email
// ) => {
//   return users.find(
//     (user) => user.email === email
//   );
// };

// console.log(
//   getUserWithEmail(users, 'email@email')
// );
// __________________________________________________________________________________
// 30/48

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [
//   17, 26, 94, 61, 36, 23, 18,
// ];

// const eachElementInFirstIsEven =
//   firstArray.every(
//     (value) => value % 2 === 0
//   );
// const eachElementInFirstIsOdd =
//   firstArray.every(
//     (value) => value % 2 !== 0
//   );

// const eachElementInSecondIsEven =
//   secondArray.every(
//     (value) => value % 2 === 0
//   );
// const eachElementInSecondIsOdd =
//   secondArray.every(
//     (value) => value % 2 !== 0
//   );

// const eachElementInThirdIsEven =
//   thirdArray.every(
//     (value) => value % 2 === 0
//   );
// const eachElementInThirdIsOdd =
//   thirdArray.every(
//     (value) => value % 2 !== 0
//   );

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
// ____________________________________________________________________________
// 31/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const isEveryUserActive = (users) => {
//   return users.every(
//     (user) => user.isActive
//   );
// };

// console.log(isEveryUserActive(users));

// const isEveryUserActive = (users) => {
//   return users.every(
//     ({ isActive }) => isActive === true
//   );
// };
// console.log(isEveryUserActive(users));
// _________________________________________________________________________________
// 32/48

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [
//   17, 26, 94, 61, 36, 23, 18,
// ];

// const anyElementInFirstIsEven =
//   firstArray.some(
//     (value) =>
//       value.firstArray % 2 === 0
//   );
// const anyElementInFirstIsOdd =
//   firstArray.some(
//     (value) =>
//       value.firstArray % 2 !== 0
//   );

// const anyElementInSecondIsEven =
//   secondArray.some(
//     (value) =>
//       value.secondArray % 2 === 0
//   );
// const anyElementInSecondIsOdd =
//   secondArray.some(
//     (value) =>
//       value.secondArray % 2 !== 0
//   );

// const anyElementInThirdIsEven =
//   thirdArray.some(
//     (value) =>
//       value.thirdArray % 2 === 0
//   );
// const anyElementInThirdIsOdd =
//   thirdArray.some(
//     (value) =>
//       value.thirdArray % 2 !== 0
//   );

// console.log(firstArray);
// console.log(secondArray);
// console.log(thirdArray);
// _____________________________________________________________________________
//33/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const isAnyUserActive = (users) => {
//   return users.some(
//     (user) => user.isActive === true
//   );
// };

// console.log(isAnyUserActive(users));
// _______________________________________________________________________________
// 34/48

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes =
//   Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(
//   (acc, number) => {
//     return acc + number;
//   },
//   0
// );

// const averagePlayTime =
//   totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// _____________________________________________________________________________
// 35/48

// const players = [
//   {
//     name: 'Mango',
//     playtime: 1270,
//     gamesPlayed: 4,
//   },
//   {
//     name: 'Poly',
//     playtime: 469,
//     gamesPlayed: 2,
//   },
//   {
//     name: 'Ajax',
//     playtime: 690,
//     gamesPlayed: 3,
//   },
//   {
//     name: 'Kiwi',
//     playtime: 241,
//     gamesPlayed: 1,
//   },
// ];

// const totalAveragePlaytimePerGame =
//   players.reduce((acc, player) => {
//     return (
//       acc +
//       player.playtime /
//         player.gamesPlayed
//     );
//   }, 0);

// console.log(
//   totalAveragePlaytimePerGame
// );
// ____________________________________________________________________________________
// 36/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const calculateTotalBalance =
//   users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);

// console.log(calculateTotalBalance);
// ____________________________________________________________________________________
// 37/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getTotalFriendCount =
//   users.reduce((acc, user) => {
//     return acc + user.friends.length;
//   }, 0);

// console.log(getTotalFriendCount);
// __________________________________________________________________________________
// 38/48

// const releaseDates = [
//   2016, 1967, 2008, 1984, 1973, 2012,
//   1997,
// ];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = [
//   ...releaseDates,
// ].sort();

// const alphabeticalAuthors = [
//   ...authors,
// ].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
// ___________________________________________________________________________________
// 39/48

// const releaseDates = [
//   2016, 1967, 2008, 1984, 1973, 2012,
//   1997,
// ];

// const ascendingReleaseDates = [
//   ...releaseDates,
// ].sort((a, b) => a - b);

// const descendingReleaseDates = [
//   ...releaseDates,
// ].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// __________________________________________________________________________
// 40/48

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = [
//   ...authors,
// ].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [
//   ...authors,
// ].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
// _________________________________________________________________________
// 41/48

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title:
//       'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = [
//   ...books,
// ].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// const sortedByReversedAuthorName = [
//   ...books,
// ].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// const sortedByAscendingRating = [
//   ...books,
// ].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [
//   ...books,
// ].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAscendingRating);
// ____________________________________________________________________________________
// 46/48

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: [
//       'Briana Decker',
//       'Sharron Pace',
//     ],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: [
//       'Marilyn Mcintosh',
//       'Padilla Garrison',
//       'Naomi Buckner',
//     ],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: [
//       'Goldie Gentry',
//       'Aisha Tran',
//     ],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: [
//       'Jordan Sampson',
//       'Eddie Strong',
//       'Adrian Cross',
//     ],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email:
//       'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: [
//       'Goldie Gentry',
//       'Briana Decker',
//     ],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getNamesSortedByFriendCount = (
//   users
// ) =>
//   [...users]
//     .sort(
//       (a, b) =>
//         a.friends.length -
//         b.friends.length
//     )
//     .map((user) => user.name);

// console.log(
//   getNamesSortedByFriendCount(users)
// );
// __________________________________________________________________________________
