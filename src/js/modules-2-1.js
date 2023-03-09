// const friends = ['Brokk', 'Alex', 'Anna'];
// console.table(friends);

// friends[2] = 'qeqeqeqe';
// console.table(friends)

//----------------------------------------------------------------

// let a = 10;
// let b = a;

// console.log('1 a:', a);
// console.log('1 b:', b);

// a = 30;

// console.log('2 a:', a);
// console.log('2 b:', b);


// const a = [1, 2, 3];
// const b = a;

// console.log('a =', a);
// console.log('b =', b);

// a[1] = 400;

// console.log('a =', a);
// console.log('b =', b);
// console.log(a === b);



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const lastIndex = friends.length - 1;

// for (let i = 0; i < +lastIndex; i += 1) {
//     friends[i] += '-1';
   
// };

// console.table(friends);


// for (const friend of friends) {
//     console.log(friend)
// }

//--------------------------------------------------------------------------
// порахувати загальну суму покупок

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }

// for (const value of cart) {
//     total += value;
// }

// console.log('total =', total);

// ---------------------------------------------------------------------
// написати скриипт що порахує всі парні числа масиву

// const numbers = [1, 2, 3, 5, 7, 9, 10, 13, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log('Парне!!!');

//         total += numbers[i];
//     }
// }

// console.log('total:', total);

//---------------------------------------------------------------------------------
// напиши скрипт пошуку логіна

// const logins = ['m4ngoDoe', 'tuyyitit', 'poly1scute', '7uipipre'];
// const loginToFind = 'poly1scute';
// let message = `Користувача ${loginToFind} не знайдено`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(login);

//     if (login === loginToFind) {
//         console.log('login:', login);
//         break;
//     }
// }

// const message = logins.includes(loginToFind)
    // ? 'yes'
//     : 'no';

// console.log(message);


