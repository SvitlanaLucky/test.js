// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//     genres: {
//         one: "historical prose",
//         two: "adventure"
//     },
//   isPublic: true,
//   rating: 8.38,
// };

// const values = Object.values(book);
// console.log(values);

// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// };

// console.log(book);
// console.log(book.title);
// console.log(book.genres.one);

// const title = 'love';

// const book = {
//     title,
// };

// console.log(book);
// ________________________________________________________________________________________________________

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.online);

//     friend.newprop = 555;
// };

// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend.name === name);
//     };
// };

// console.log(findFriendByName(friends, 'Poly'));

// ____________________________________________________________________________________

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// };

// console.log(user);

// __________________________________________________________________________

// const stones = [
//     { name: 'Green', price: 1300, quantity: 4 },
//     { name: 'Yellow', price: 2700, quantity: 3 },
//     { name: 'Blue', price: 400, quantity: 7 },
//     { name: 'Black', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         const { name, price, quantity } = stone;

//         if (name === stoneName) {
//             return price * quantity;
//         };
//     };
// };

// console.log(calcTotalPrice(stones, 'Green'));
// console.log(calcTotalPrice(stones, 'Yellow'));
// console.log(calcTotalPrice(stones, 'Blue'));
// console.log(calcTotalPrice(stones, 'Black'));

// _____________________________________________________________________________

// const user = {
//     name: 'Sv',
//     age: 36,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//     },
// };
// delete user.languages.css;

// // Object.freeze(user);
// user.age = 100;

// console.log(user);

// if ('city' in user) {
//     console.log('yes')
// } else {
//     console.log('no')
// };
// ___________________________________________________________________________________

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// Object.freeze(Transaction);

// const account = {
//     balance: 0,
//     transactions: [{ id: 16, amount: 145, type: 'deposit' },],
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type,
//         }
//     },
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error';
//         };
//         const item = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//         this.transactions.push(item);
//         return item;
//     },
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'недостатньо коштів';
//         };

//         const item = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(item);
//         this.balance -= amount;
//         return item;
//     },
//     getBalance() {
//         return this.balance;
//     },
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             };
//             return 'Empty';
//         };
//     },
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount;
//             };
//         };
//         return sum;
//     },
// };

// console.log(account.deposit(110));
// console.log(account.deposit(1000));
// console.log(account.transactions);
// console.log(account.withdraw(30));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(18));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account);
// __________________________________________________________________________________________

// const user = {
//     email: 'mango@mail.com',
//     age: 20,
// };

// const { email: userEmail } = user;
// console.log(user);
// ______________________________________________________________

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// ___________________________________________________________________________

// const scores = [
//   89, 64, 42, 17, 93, 51, 26,
// ];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
// __________________________________________________________________________

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [
//   89, 14, 51, 26,
// ];
// const thirdGroupScores = [
//   29, 47, 18, 97, 81,
// ];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(
//   ...allScores
// );
// const worstScore = Math.min(
//   ...allScores
// );

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
// _________________________________________________________________________

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };

// console.log(finalSettings);
//________________________________________________________________________

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   return {
//     completed,
//     category,
//     priority,
//     ...data,
//   };
// }

// console.log(
//   makeTask({
//     text: 'Take out the trash',
//   })
// );
// ___________________________________________________________________

// const bookShelf = {
//   books: [
//     'The last kingdom',
//     'The guardian of dreams',
//   ],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// _________________________________________________________________________

// const bookShelf = {
//   books: [
//     'The last kingdom',
//     'Haze',
//     'The guardian of dreams',
//   ],
//   updateBook(oldName, newName) {

//     const bookIndex =
//       this.books.indexOf(oldName);

//     this.books.splice(
//       bookIndex,
//       1,
//       newName
//     );
//   },
// };
// __________________________________________________________________________

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return this.potions;
//   },
// };
// ______________________________________________________________________

// const atTheOldToad = {
//   potions: [
//     'Speed potion',
//     'Dragon breath',
//     'Stone skin',
//   ],
//   removePotion(potionName) {
//     const potionIndex =
//       this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//   },
// };
// _______________________________________________________________________

// const atTheOldToad = {
//   potions: [
//     {
//       name: 'Speed potion',
//       price: 460,
//     },
//     {
//       name: 'Dragon breath',
//       price: 780,
//     },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (
//         potion.name === newPotion.name
//       ) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (
//       let i = 0;
//       i < this.potions.length;
//       i += 1
//     ) {
//       if (
//         this.potions[i].name ===
//         potionName
//       ) {
//         return this.potions.splice(
//           [i],
//           1
//         );
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// ______________________________________________________________________
