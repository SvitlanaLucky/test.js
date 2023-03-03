// const str1 = '12.49';
// const str2 = '0.55';

// console.log(str1 + str2);

// const num2 = parseFloat(str2);
// const num1 = parseFloat(str1);

// console.log(Math.round(str1));

//------------------------- examples ------------------------------------

// 1

// const apples = 100;
// const grapes = 25;

// const total = apples + grapes;
// console.log(total);

// const diff = apples - grapes;
// console.log(diff);

// 2

// let students = 75;
// students += 50;
// console.log(students);

// 3

// const value = 27.4;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// console.log(Math.round(Math.random() * 100) + 1);

// 4

// const boyName = 'Alex Kych';
// const friendName = 'Gmix';
// const message = `${boyName} is a best friend ${friendName}`;

// console.log(message);

// 5

// let weight = '102,3';
// let height = '6.2';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// const bmi = (weight / Math.pow(height, 2)).toFixed(2);

// console.log(bmi);

// 6

// const incomingValue = prompt('enter');
// const defaultValue = 10;

// const value = incomingValue || defaultValue;

// console.log(value);


// ----------------------- lessons 1.2 -----------------------

// const x = Math.round(Math.random() * 100 + 1); // 1-100
// let userInput;

// do {
//     userInput = Number(prompt('Enter a number (1-100)'));

//     console.log(userInput);

//     if (x > userInput) {
//         console.log('x >', userInput);
//     } else if (x < userInput) {
//         console.log('x <', userInput);
//     }
// } while (x !== userInput);

// console.log('You won!');


// 1

// const userInput = prompt('');

// if (userInput === 'ECMAScript') {
//     console.log('Hurray!');
// } else {
//     console.log('No :(');
// }

// 2

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//     timestring = `${hours} г. ${minutes} хв.`;
// } else {
//     timestring = `${hours} г.`;
// }

// console.log(timestring);


// 4

// const a = 120;
// const b = 100;

// if (a > 100 && b > 100) {
//     // console.log(a > b ? a : b);
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }


// example 5

// let link = 'https://my-site.com/about';

// // if (!link.endsWith('/')) {
//     if(link[link.length - 1] !== '/') {
//     link += '/';
// }

// console.log(link);


// example 7

// let link = 'https://my-site.com/about';

// link += !link.endsWith('/') ? '/' : '';
// console.log(link);


// example 10

// const daysUntilDeadline = 1;

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Today');
//         break;
    
//     case 1:
//         console.log('Tomorrow');
//         break;
    
//     case 2:
//         console.log('Olla');
//         break;
    
//     default:
//         console.log('Day in future');
// }


// example 11

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 5) {
//     if (i % 5 === 0) {
//        console.log(i);
//     }
// }
    

// const age = 7;

// console.log('Олексійкові', age, 'рочків');




// const type = typeof('fgfggfg');  //показує тип
// console.log(type);

// console.log('До');
// alert('sdsdsdds');
// console.log('Після');

// const loveSvitlana = confirm('Олексій, чи любиш ти Світлану');
// console.log(loveSvitlana);


// let quantity = prompt('Скільки років ви разом?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// if (quantity === '7') {
//     console.log(':)') ;
// } else {
//     console.log(':(') ;
// }

// const room = 7;
// const welcome = 'gest ' + 'Svitlana ' + 'come ' + room;
// console.log(welcome);

// console.log(Number(null));

// console.log(Boolean(-9));
// console.log(Boolean(null));

// const x1 = 10;
// const x2 = 30;
// const number = 25;

// console.log(`Число ${number} попадє у відрізок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадє у відрізок до ${x1}?`, number > x2);
// console.log(`Число ${number} попадє у відрізок від ${x1} до ${x2}?`, number > x1 && number < x2);
// console.log(`Число ${number} попадє у відрізок до ${x1} від ${x2}?`, number < x1 || number > x2);


// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можна відкрити чат? ', canOpenChat);


// const sub = 'free';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Чи є доступ до контенту? ', canAccessContent);



// const balance = -10;
// let message;

// if (balance > 0) {
//     message = 'Cool!';
// } else {
//     message = ':(';
// }

// const message = balance >= 0 ? 'Cool!' : ':(';

// console.log(message);


// --------------------- switch -----------------

// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3) {
//     price = 40;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Таких зірок нема')
// }

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         console.log('хе хе')
//         break;
    
//     case 3:
//         price = 70;
//         break;
    
//     case 4:
//         price = 90;
//         break;
    
//     case 5:
//         price = 130;
//         break;
    
//     default:
//         console.log('Таких зірок нема');
// }

// console.log(price);


// const option = 3;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра';
//         break;
    
//     case 2:
//         message = 'Очікуйте дзвінок від курєра';
//         break;
    
//     default:
//         message = 'Вам передзвонить менеджер';
// }
// console.log(message);



// ---------------- цикл for --------------------------

// for (let i = 0; i <= 50; i += 3) {
//     console.log(i);
// }

// console.log('hhhhh');

// const employees = 4;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     console.log(`ЗП працівник номер ${i} - ${salary}`);
    
//     totalSalary += salary;
// }

//   console.log('totalSalary ', totalSalary);


// const min = 5;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('Не парне: ', i);
//         continue;
//     }

//     console.log('Число парне: ', i);
//     total += i;
// }

// console.log('total: ', total);



// let balance = 100;
// const payment = 2000;

// console.log(`Загальна сума замовлення ${payment} кредитівю Перевіряємо доступну суму на рахунку`);

// if (balance >= payment) {
//     console.log('ok');

//     balance -= payment;

//     console.log(`Залишилось на рахунку ${balance}`);
// } else {
//     console.log('Нема грошей');
// }

// console.log('Операція завершена');


// let totalSpent = 5900;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовий партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Срібний партнер, скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Золотий партнер, скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('Не партнер, скидка 0%');
// }

// payment -= payment * discount;

// console.log(`Оформлення замовлення на суму ${payment} зі скидкою ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Загальна сума витрат в магазині ${totalSpent}`);

 

//---------------------------------------- модулі ---------------------------------------------------

// import {
//     one,
//     two,
// } from './course.js'

// console.log(one);
// console.log(two);


// import {
//     one as newOne,
//     two,
// } from './course.js'

// console.log(newOne);
// console.log(two);


// import { sum, mult as newMult } from './course.js';

// console.log(sum(3, 2));
// console.log(newMult(5, 6));



