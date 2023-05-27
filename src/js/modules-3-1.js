// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//     genres: {
//         one: "historical prose",
//         two: "adventure"
//     },
//   isPublic: true,
//   rating: 8.38,
// };

// const values = Object.values(book);
// console.log(values);

// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// };


// console.log(book);
// console.log(book.title);
// console.log(book.genres.one);


// const title = 'love';

// const book = {
//     title,
// };

// console.log(book);
// ________________________________________________________________________________________________________


// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.online);

//     friend.newprop = 555;
// };

// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend.name === name);
//     };
// };

// console.log(findFriendByName(friends, 'Poly'));

// ____________________________________________________________________________________


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// };

// console.log(user);

// __________________________________________________________________________

// const stones = [
//     { name: 'Green', price: 1300, quantity: 4 },
//     { name: 'Yellow', price: 2700, quantity: 3 },
//     { name: 'Blue', price: 400, quantity: 7 },
//     { name: 'Black', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         const { name, price, quantity } = stone;
        
//         if (name === stoneName) {
//             return price * quantity;
//         };
//     };
// };

// console.log(calcTotalPrice(stones, 'Green'));
// console.log(calcTotalPrice(stones, 'Yellow'));
// console.log(calcTotalPrice(stones, 'Blue'));
// console.log(calcTotalPrice(stones, 'Black'));

// _____________________________________________________________________________


    


