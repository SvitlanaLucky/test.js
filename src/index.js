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
    




















