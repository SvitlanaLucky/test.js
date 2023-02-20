'use strict'

// console.log('Hello, Svitlana');

// const ladyS = {
//     name: 'Svitlana',
//     age: 36,
//     weight: 52,
// };

// const ladyPs = ladyS;

// ladyPs.age = 26;

// ladyPs.height = 174;
// ladyS.Brokk = 3;

// console.log(ladyS);
// console.log(ladyPs);



// типізація статична і динамічна -> js динамічна мова, викор. оголошення зміної const щоб не було помилок --------

// let b = 9;

// b = 'fdc';
// console.log(b);

// function create() {
//     console.log('Hello everybody');
// };

// create();

// create = 'Hi';

// create();
// console.log(create);

// const create = () => {
//     console.log('Hello everybody');
// }

// create();

// create = 'Hi';

// create();


// ------------------------ Обєкт --------------------------------

// const myAlex = {
//     name: 'Alex',
//     age: 28,
//     height: 176,
//     love: true,
// };
// console.log(myAlex);

// myAlex.weight = 74;
// myAlex.age = 29;

// console.log(myAlex);

// delete myAlex.weight;

// console.log(myAlex);


// const myAlex = {
//     name: 'Alex',
// };

// console.log(myAlex);


// const svitlanaAlex = 'age';

// myAlex[svitlanaAlex] = 7;

// console.log(myAlex);


// const name = 'Alex';
// const age = 28;

// const userProfile = {
//     name,
//     age,
//     love: true,
// };

// console.log(userProfile);


// --------------- методи --------------------------------

// const myCity = {
//     city: 'Kyiv',
//     cityGreeting() {
//         console.log('Hello');
//     },
// };

// myCity.cityGreeting();


// --------------------- JSON -------------------

// const post = {
//     title: 'My post',
//     likesQty: 5,
// };

// console.log(post);

// console.log(JSON.stringify(post));

// const postStringified = JSON.stringify(post);

// console.log(JSON.parse(postStringified));


// ----------------------------- значення примітивних типів --------------------

// const a = 10;

// let b = a;

// console.log('b:', b);

// b = 30;

// console.log(a);
// console.log(b);


// ------------------------------ мутації  (copy by reference) -------------------------------

// const person = {
//     name: 'Bob',
//     age: 72,
// };

// const person2 = person;

// person2.age = 21;
// person2.isAdult = true;

// console.log(person);



// const person = {
//     name: 'Bob',
//     age: 23,
// };

// const person3 = Object.assign({}, person);

// person3.age = 18;
// person3.isAdult = false;

// console.log('person:', person);
// console.log('person3:', person3);


// const person = {
//     name: 'Alisa',
//     age: 22,
// };

// const person4 = { ...person };

// person4.name = 'Sv';

// console.log('person:', person);
// console.log('person4:', person4);


// const person = {
//     name: 'Alisa',
//     age: 22,
//     parameters: {
//         weight: 72,
//         height: 174,
//     },
// };

// const person5 = JSON.parse(JSON.stringify(person));

// person5.name = 'Svitlana';
// person5.parameters.weight = 52;
// delete person5.parameters;

// console.log('person:', person);
// console.log('person5:', person5);



// ------------------------- фунції ------------------------------------

// let a = 5;
// let b = 2;

// let c;

// c = a + b;
// console.log(c);

// a = 24;
// b = 6;

// c = a + b;
// console.log(c);


// let a = 2;
// let b = 3;

// function sum(a, b) {
//     const c = a + b;
//     console.log(c);
// };

// sum(a, b); // 5

// a = 100;
// b = 200;

// sum(a, b); // 300


// function myFn(a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// };
 
// console.dir(myFn);

// console.log(myFn.prototype);

// myFn(10, 4);



// function myFn() { };

// myFn();

// console.log(myFn());



// const personOne = {
//     name: 'Bob',
//     age: 21,
// };

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person);
//     updatedPerson.age += 1;
//     return updatedPerson;
// };

// const updatedPersonOne = increasePersonAge(personOne);
// console.log(updatedPersonOne.age);


// ------------------------- callback function ---------------------------------

// function printMyName() {
//     console.log('Svitlana');
// };

// console.log('Start');

// setTimeout(printMyName, 2000);


// ------------------------------------------------------------------------------------

// let a;
// let b;

// function myFn() {
//     let b;
//     a = true;
//     b = 10;
//     console.log('b:', b);
// };

// myFn();

// console.log('a:', a);
// console.log('b:', b);


// const a = 10;

// function myFn() {
//     function innerFn() {
//         console.log(a);
//     };
//     innerFn();
// };

// myFn();

// -------------------------------------------- оператори -----------------------------------------------

// let myCity;

// console.log(typeof myCity);

