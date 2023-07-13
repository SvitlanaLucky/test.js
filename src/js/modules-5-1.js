// const fn = function () {
//   console.log('fn -> this:', this);
// };

// fn();
// _________________________________________________________

// 'use strict';
// function foo() {
//   console.log(this);
// }
// foo();

// const boo = function () {
//   console.log(this);
// };
// boo();

// const arrow = () => {
//   console.log(this);
// };
// arrow();
// _________________________________________________________________________________

// const objA = {
//   name: 'User name',
//   nickName() {
//     console.log(this);
//   },
// };

// objA.nickName();

// const objB = {
//   name: 'User name',
//   nickName: () => {
//     console.log(this);
//   },
// };

// objB.nickName();

// const objC = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     nickName() {
//       console.log(this);
//     },
//   },
// };

// objC.skills.nickName();
// _______________________________________________________________________________

// call  apply  bind

// const objA = {
//   name: 'A',
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };
// objA.myAge(22, 18);

// const objB = {
//   name: 'B',
// };

// const objC = {
//   name: 'C',
// };

// objA.myAge.call(objB, 1, 2);
// objA.myAge.call(objC, 10, 20);

// const objA = {
//   name: 'A',
//   myAge(a, b, c, d) {
//     console.log(this, a, b, c, d);
//     return 'Some value';
//   },
// };

// const objB = {
//   name: 'B',
// };

// const result = objA.myAge.bind(objB);

// result(10, 20, 30, 40);
// result('a', 'b', 'c', 'd');
// ____________________________________________________________________________

// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } =
//       this.stones.find(
//         ({ name }) => name === stoneName
//       );
//     return price * quantity;
//   },
// };

// const shop2 = {
//   stones: [
//     {
//       name: 'X',
//       price: 300,
//       quantity: 4,
//     },
//     {
//       name: 'Y',
//       price: 200,
//       quantity: 3,
//     },
//   ],
// };

// console.log(
//   chopShop.calcTotalPrice.call(
//     shop2,
//     'Y'
//   )
// );

// console.log(
//   chopShop.calcTotalPrice('Ruby')
// );
// console.log(
//   chopShop.calcTotalPrice('Diamond')
// );
// _________________________________________________________________________

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (
//       (this.a ?? 0) + (this.b ?? 0)
//     );
//   },
//   mult() {
//     return (
//       (this.a ?? 1) * (this.b ?? 1)
//     );
//   },
// };

// calculator.read(3);

// const calc2 = {};
// calculator.read.call(calc2, 3, 4);
// // console.log(calc2);
// console.log(calculator);

// // console.log(calculator.add());
// console.log(calculator.mult());
// ________________________________________________________________________
