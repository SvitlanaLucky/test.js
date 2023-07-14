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

class User {
  constructor({
    name,
    age,
    location,
    email,
  } = {}) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.email = email;
  }
}

class Avatar extends User {
  constructor({
    name,
    age,
    location,
    email,
    damage,
  }) {
    super({
      name,
      age,
      location,
      email,
    });
    this.damage = damage;
  }
}

const test = new Avatar({
  name: 'A',
  age: 100,
  location: 'Hata',
  email: 'Avatar@gmail.com',
  damage: 450,
});

console.log(test);
