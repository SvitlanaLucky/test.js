// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 10;

// console.log(objC);
// console.log(objB);
// console.log(objA);

// console.log(objC.hasOwnProperty('z'));
// console.log(objC.isPrototypeOf('z'));
// _______________________________________________________________________________

// const Car = function ({
//   brand,
//   model,
//   price,
// } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (
//   newPrice
// ) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'Saab',
//   model: '9-3',
//   price: 45000,
// });
// myCar2.changePrice(25000);
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 15000,
// });
// console.log(myCar3);

// ______________________________________________________________________________

// const CounterPlugin = function ({
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
// };

// CounterPlugin.prototype.increment =
//   function () {
//     this._value += this._step;
//   };

// CounterPlugin.prototype.decrement =
//   function () {
//     this._value -= this._step;
//   };

// const counter = new CounterPlugin({
//   step: 10,
// });

// console.log(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter);
// _______________________________________________________________________________

// ❤️ wind + V
console.log('❤️');
// ___________________________________________________________________________

// const user = {
//   name: 'test user A',
//   age: 18,
//   sayHello() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(`My age ${this.age}`);
//   },
// };

// const user1 = Object.create(user);
// user1.name = 'test user 1';
// user1.sayHello();
// console.log('user1:', user1);

// const user2 = Object.create(user);
// user2.showAge();
// console.log('user2:', user2);
// ____________________________________________________________________________________

// const user = {
//   name: 'test user B',
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const admin = Object.create(user);
// admin.age = 19;
// admin.showAge = function () {
//   console.log(this.age);
// };

// const practiceOwner =
//   Object.create(admin);
// practiceOwner.name = 'Owner';

// console.log(
//   'practiceOwner:',
//   practiceOwner
// );
// console.log('admin:', admin);

// practiceOwner.showAge();
// practiceOwner.sayHello();
// ______________________________________________________________________________

// class User {
//   static counter = 0;
//   static addUser() {
//     this.counter += 1;
//     console.log(
//       `Number of users ${this.counter}`
//     );
//   }
//   #location;
//   constructor({
//     name,
//     email,
//     age = 18,
//     location = 'World',
//   } = {}) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.#location = location;
//     User.addUser();
//   }
//   satHello() {
//     // console.log(this.name);
//   }

//   #getEmail() {
//     console.log(this.email);
//   }

//   get locale() {
//     return this.#location;
//   }
//   set locale(city) {
//     this.#location = city;
//     this.#getEmail();
//   }
// }

// const test = new User({
//   name: 'User A',
//   email: 'A@gmail.com',
//   location: 'Lviv',
// });
// test.satHello();

// // console.log('get:', test.locale);
// // console.log(
// //   'set:',
// //   (test.locale = 'Dnipro')
// // );

// const test1 = new User({
//   name: 'User B',
//   email: 'B@gmail.com',
//   age: 99,
// });

// // console.log('test:', test);
// // console.log('test1:', test1);
// ____________________________________________________________________________________

// class User {
//   constructor({
//     name,
//     age,
//     location,
//     email,
//   } = {}) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.email = email;
//   }
// }

// class Avatar extends User {
//   constructor({
//     name,
//     age,
//     location,
//     email,
//     damage,
//   }) {
//     super({
//       name,
//       age,
//       location,
//       email,
//     });
//     this.damage = damage;
//   }
// }

// const test = new Avatar({
//   name: 'A',
//   age: 100,
//   location: 'Hata',
//   email: 'Avatar@gmail.com',
//   damage: 450,
// });

// console.log(test);

// class Zombi extends User {
//   constructor({
//     name,
//     age,
//     location,
//     poison,
//   }) {
//     super({
//       name,
//       age,
//       location,
//     });
//     this.poison = poison;
//   }
//   toBite() {
//     console.log(
//       `Bite with ${this.poison}`
//     );
//   }
// }

// const test2 = new Zombi({
//   name: 'Zombi',
//   age: 900,
//   location: 'Zombi lend',
//   poison: 500,
// });

// console.log(test2);

// ___________________________________________________________

// class Admin {
//   constructor({
//     name,
//     age,
//     location,
//     level,
//   } = {}) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.level = level;
//   }
// }

// class Alex extends Admin {
//   constructor({
//     name,
//     age,
//     location,
//     level,
//   }) {
//     super({
//       name,
//       age,
//       location,
//       level,
//     });
//   }
// }

// const userAlex = new Alex({
//   name: 'Alex',
//   age: 29,
//   location: 'Ukraine',
//   level: 11,
// });

// class Svitlana extends Admin {
//   constructor({
//     name,
//     age,
//     location,
//     level,
//     eyes,
//   }) {
//     super({ name, age, location });
//     this.level = level;
//     this.eyes = eyes;
//   }
// }

// const userSv = new Svitlana({
//   name: 'Svitlana',
//   age: 18 + 18,
//   location: 'Ukraine',
//   level: 10,
//   eyes: 'green',
// });

// console.table(userAlex);
// console.table(userSv);
// ___________________________________________________________

// class Blogger {
//   constructor({
//     email,
//     age,
//     numberOfPosts,
//     topics,
//   }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: 'mango@gmail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo());

// mango.updatePostCount(5);

// console.log(mango.getInfo());
// _______________________________________________________________________________

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return;
//     }
//     return 'We have this storage';
//   }

//   removeItem(item) {
//     const idx =
//       this.items.indexOf(item);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// const storage = new Storage([
//   '🍎',
//   '🍋',
//   '🥝',
// ]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem('🍌');
// console.table(storage.items);

// storage.removeItem('🍋');
// console.table(storage.items);
// ____________________________________________________________________________

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     if (this.#login !== newLogin) {
//       this.#login = newLogin;
//     }
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.#email !== newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@gmail.com',
// });

// console.log(mango.login);
// mango.login = 'mangodog';
// console.log(mango.login);

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@gmail.com',
// });

// console.log(poly.login);
// poly.login = 'polycat';
// console.log(poly.login);
// _________________________________________________________________________________

// class Cat {
//   constructor({ name, legs }) {
//     this.name = name;
//     this.legs = legs;
//   }
//   sayHello() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const brokk = new Cat({
//   name: 'Brokk',
//   legs: 4,
// });

// console.log(brokk);
// brokk.sayHello();
// ______________________________________________________________________________

// const myObject = {
//   o: 5,
// };

// console.log(
//   myObject.__proto__ ===
//     Object.prototype
// );
// _______________________________________________________________________________

// const makeChangeColor = function name(
//   params
// ) {
//   const changeColor = function (color) {
//     console.log(
//       'changeColor -> this',
//       this
//     );
//   };

//   const sweater = {
//     color: 'teal',
//   };

//   console.log(sweater);

//   sweater.updateColor = changeColor;

//   return sweater.updateColor;
// };

// const sweatColor = makeChangeColor();
// sweatColor('blue');
// _______________________________________________________________________________
// 1/20

// const pizzaPalace = {
//   pizzas: [
//     'Supercheese',
//     'Smoked',
//     'Four meats',
//   ],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable =
//       this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// _________________________________________________________________________________
// 2/20

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -=
//       cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// _______________________________________________________________________________
// 3/20
// const historyService = {
//   orders: [
//     {
//       email: 'jacob@hotmail.com',
//       dish: 'Burrito',
//     },
//     {
//       email: 'solomon@topmail.net',
//       dish: 'Burger',
//     },
//     {
//       email: 'artemis@coldmail.net',
//       dish: 'Pizza',
//     },
//     {
//       email: 'solomon@topmail.net',
//       dish: 'Apple pie',
//     },
//     {
//       email: 'jacob@hotmail.com',
//       dish: 'Taco',
//     },
//   ],

//   getOrdersLog() {
//     return this.orders
//       .map(
//         (order) =>
//           `email: ${order.email} dish: ${order.dish}`
//       )
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(
//       (order) => order.email
//     );
//     const uniqueEmails = new Set(
//       emails
//     );
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(
//       (order) =>
//         order.email === email
//     );
//   },
// };
// ________________________________________________________________________________
// 4/20

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// console.log(child.age);
// ___________________________________________________________________________________
// 7/20
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// ____________________________________________________________________________________
// 9/20

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// _____________________________________________________________________________________
// 10/20

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items = this.items.filter(
//       (item) => item !== itemToRemove
//     );
//   }
// }

// const storage = new Storage([
//   'Nanitoids',
//   'Prolonger',
//   'Antigravitator',
// ]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// ________________________________________________________________________________________
