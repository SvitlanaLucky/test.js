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
