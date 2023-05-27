// const a = 4;
// const b = 2;

// if (a > b) {
//     console.log('true');
// } else {
//     console.log('false');
// };
// ________________________________________________________________________________

// const result = 8 > 6 ? '>' : '<';

// console.log(result);
// _____________________________________________________________________________
// const key = 2;

// switch (key) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default:
//         console.log('ok');
// };
// _____________________________________________________________________________

// let a = 15;

// if (true) {
//     let a = 1;
//     a = 25;
// };

// console.log(a);
// _________________________

// let a = 15;

// if (true) {
//     a = 25;
//     let a = 1;
// };

// console.log(a);
// ____________________________________________________

// let a = 10;

// if (true) {
//     let a = 15;
 
//     if (true) {
//         a = 25
//     };
// };

// console.log(a);
// ___________________________________________________________

// let a = 1;

// if (true) {
//     a = 10;
//     if (true) {
//         let a = 25;
//     };
// };

// console.log(a);
// _________________________________________________

// let b = 25;

// if (true) {
//     let a = 15;
//     b = 44;

//     if (true) {
//         a = 25;
//         b = 31;
//     };

//     a = 4;
//     console.log(b);
// };

// console.log(a);
// _____________________________________________________________________________

// const str = 'hello world';

// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
// };
// _______________________________________________________

// const value = prompt('What is your name?')

// if (value === 'Sv') {
//     alert('Ok');
// } else {
//     alert('No, Sv');
// };

//  console.log(value);
// ______________________________________________________________

// const hours = 14;
// const minutes = 1;

// if (minutes) {
//     console.log(`${hours}h. ${minutes}m.`);
// } else {
//     console.log(`${hours}h.`);
// };
// ____________________________________________________________________________

// const userInput = Number(prompt('Enter a number'));
// console.log(typeof userInput);
// if (!userInput) {
//   alert ("it is zero");
// } else if (userInput > 0) {
//     alert ('Positive number');
// } else {
//     alert('negative number');
// };
// ______________________________________________________________________________

// const a = 10;
// const b = 50;

// if (a > 100 && b > 100) {
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512);
// };
// _____________________________________________________________________

// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
//     if (!(i % 5)) {
//         console.log(i);
//     };
// };
// _______________________________________________________________________________

// function sayHi () {
//     console.log("Hello, this is my first function!");
// };

// sayHi();
// _______________________________________________________________

// function add(a, b, c) {
//     const result = a + b + c;
//     console.log(`Addition result equals ${result}`)
// };

// add(15, 27, 10);


// function add(a, b, c) {
//     return a + b + c;
// };

// console.log(add(5, 10, 15));


// function makeMessage(name, price) {
//     return `You picked ${name}, price per item is ${price} credits`;
// };

// console.log(makeMessage('Radar', 650));


// function calculateTotalPrice(orderQuantity, pricePerItem) {
//     const totalPrice = orderQuantity * pricePerItem;
//     return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));


// function isAdult(age) {
//     const passed = age >= 18;
//     return passed;
// };

// console.log(isAdult(11));


// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = SAVED_PASSWORD === password;
    
//     return isMatch;
// };

// console.log(isValidPassword('jqueryismyjam'));


// function checkStorage(available, ordered) {
//     let message;
//     if (ordered > available) {
//         message = 'Not enough goods in stock!';
//     } else {
//         message = 'Order is processed, our manager will contact you.';
//     };
//     return message;
// };

// console.log(checkStorage(100, 150));


// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     return isInRange;
// };

// console.log(isNumberInRange(10, 30, 1));



















