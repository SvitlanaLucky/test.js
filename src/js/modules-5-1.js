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
