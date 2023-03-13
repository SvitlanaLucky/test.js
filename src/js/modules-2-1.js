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

//-----------------------------------------------------------------------------
// напиши скрипт самого маленького числа в масиві

// const numbers = [45, 56, 76, 32, 43];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// або найбільше
//     if (number > smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('small number:', smallestNumber);

//-----------------------------------------------------------------------------------
// написати скрипт що об'єднує елементи масиву в строку

// const friends = ['mango', 'poly', 'kiwi', 'ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1)

// const string = friends.join('--');

// console.log(string);

//------------------------------------------------------------------------
// напиши скрипт який замінює регістр на протилежний

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     console.log('ця буква в нижньому регістрі:', letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLocaleLowerCase();
    // }

//     invertedString += letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
// }

// console.log(invertedString);

//-------------------------------------------------------------------------------
//назва заголовка

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');

// console.log(words);
    
// console.log(normalizedTitle);

// const slug = words.join('-');
// console.log(slug);


// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

//------------------------------------------------------------------------------
// карточки видалити добавити обновити

// const cards = [
//     'Car-1',
//     'Car-2',
//     'Car-3',
//     'Car-4',
//     'Car-5',
// ];

// console.table(cards);

// const cardToRemove = 'Car-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 2);

// console.table(cards);

//------------------------

// const cardToInsert = 'Car-6';
// const index = 3;

// cards.splice(1, 0, 5, 6, 7);

// console.table(cards);

//----------------------------


// const cardToUpdate = 'Car-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'newCar-4');

// console.table(cards);

//-------------------------------------------------------------------------------------------------

// let str = 'hello';
// let a = str.split('', 2);

// console.log(a);

//---------------------------------------------------




